var gulp        = require('gulp'),
    frontMatter = require('gulp-front-matter'),
    marked      = require('gulp-marked'),
    rename      = require('gulp-rename'),
    rimraf      = require('gulp-rimraf'),
    path        = require('path'),
    swig        = require('swig'),
    through     = require('through2'),
    http        = require('http'),
    site        = require('./site.json'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    sass        = require('gulp-sass');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./build/"
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('build/css'))
    .pipe(reload({stream:true}));
});

swig.setDefaults({
  loader: swig.loaders.fs(__dirname + '/src/templates'),
  cache: false
});

function collectPosts() {
  var posts = [];
  var date = [];
  return through.obj(function (file, enc, cb) {
    posts.push(file.page);
    posts[posts.length - 1].content = file.contents.toString();
    this.push(file);
    cb();
  },
  function (cb) {
    posts.sort(function (a, b) {
      return b.date - a.date;
    });
    site.posts = posts;
    cb();
  });
}

function postURL() {
  return through.obj(function (file, enc, cb) {
    var basename = path.basename(file.path, '.md');
    file.page.url  = basename + '.html';
    this.push(file);
    cb();
  });
}

function summarize(marker) {
  return through.obj(function (file, enc, cb) {
    var summary = file.contents.toString().split(marker)[0];
    file.page.summary = summary;
    this.push(file);
    cb();
  });
}

function applyTemplate(templateFile) {
  var tpl = swig.compileFile(path.join(__dirname, templateFile));
  return through.obj(function (file, enc, cb) {
    var data = {
      site: site,
      page: file.page,
      content: file.contents.toString()
    };
    file.contents = new Buffer(tpl(data), 'utf8');
    this.push(file);
    cb();
  });
}

gulp.task('posts', function () {
  return gulp.src('src/posts/*.md')
    .pipe(frontMatter({property: 'page', remove: true}))
    .pipe(marked())
    .pipe(summarize('<!--more-->'))
    .pipe(postURL())
    .pipe(collectPosts())
    .pipe(applyTemplate('/src/templates/post.html'))
    .pipe(rename(function (path) {
      path.extname = ".html";
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('pages:html', ['posts'], function () {
  return gulp.src(['src/pages/*.html'])
  .pipe(through.obj(function (file, enc, cb) {
    var data = {
      site: site,
      page: {}
    };
    var tpl = swig.compileFile(file.path);
    file.contents = new Buffer(tpl(data), 'utf8');
    this.push(file);
    cb();
  }))
  .pipe(gulp.dest('build'));
});

gulp.task('pages:md', function () {
  return gulp.src('pages/*.md')
    .pipe(frontMatter({property: 'page', remove: true}))
    .pipe(marked())
    .pipe(applyTemplate('src/templates/default.html'))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('build'));
});

gulp.task('pages', ['pages:md', 'pages:html']);

gulp.task('buildAll', ['posts', 'pages']);

gulp.task('clean', function() {
    return gulp.src('build', {read: false})
    .pipe(rimraf());
});

gulp.task('default', ['sass', 'browser-sync', 'buildAll'], function () {
  gulp.watch("src/scss/*.scss", ['sass']);
  gulp.watch(['src/posts/*.md', 'src/templates/*.html'], ['posts', 'pages',browserSync.reload]);
  gulp.watch(['src/pages/**/*', 'src/templates/*.html'], ['pages', browserSync.reload]);
});
