var gulp = require("gulp"),
  frontMatter = require("gulp-front-matter"),
  marked = require("gulp-marked"),
  rename = require("gulp-rename"),
  rimraf = require("gulp-rimraf"),
  path = require("path"),
  swig = require("swig"),
  through = require("through2"),
  http = require("http"),
  site = require("./site.json"),
  browserSync = require("browser-sync"),
  reload = browserSync.reload,
  sass = require("gulp-sass"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  sketch = require("gulp-sketch"),
  iconfont = require("gulp-iconfont"),
  consolidate = require("gulp-consolidate"),
  prefix = require("gulp-autoprefixer"),
  imagemin = require("gulp-imagemin");

// Create icon font
var fontName = "icons";
var template = "template";

gulp.task("icons", function() {
  gulp
    .src("src/icons/icons.sketch")
    .pipe(
      sketch({
        export: "artboards",
        formats: "svg"
      })
    )
    .pipe(iconfont({ fontName: fontName }))
    .on("codepoints", function(codepoints) {
      var options = {
        glyphs: codepoints,
        fontName: fontName,
        fontPath: "../fonts/", // set path to font (from your CSS file if relative)
        className: "icon" // set class name in your CSS
      };
      gulp
        .src("src/icons/" + template + ".scss")
        .pipe(consolidate("lodash", options))
        .pipe(rename({ basename: "_icons" }))
        .pipe(gulp.dest("src/scss/")); // set path to export your CSS
    })
    .pipe(gulp.dest("build/fonts/")); // set path to export your fonts
});

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "./build/",
      notify: false
    },
    open: false
  });
});

// Compile SASS
gulp.task("mainCss", function() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(
      sass({
        errLogToConsole: true
      })
    )
    .pipe(prefix())
    .pipe(gulp.dest("build/css"))
    .pipe(reload({ stream: true }));
});

// Compile JS
gulp.task("mainJs", function() {
  return gulp
    .src([
      "./src/js/modernizr.js",
      "./bower_components/jquery/dist/jquery.js",
      "./src/js/prism.js",
      "./src/js/app.js"
    ])
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./build/js"));
});

// JS used for individual pages
gulp.task("standAloneJs", function() {
  return gulp
    .src([
      "./src/js/standalone/**",
      "./bower_components/underscore/underscore-min.js"
    ])
    .pipe(gulp.dest("./build/js/standalone"));
});

// CSS used for individual pages
gulp.task("standAloneCss", function() {
  return gulp
    .src("./src/css/standalone/**")
    .pipe(gulp.dest("./build/css/standalone"));
});

// Copy images
gulp.task("copyImages", function() {
  return gulp
    .src(["./src/images/**"])
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
});

// Copy fonts
gulp.task("copyFonts", function() {
  return gulp.src(["./src/fonts/**"]).pipe(gulp.dest("./build/fonts"));
});

swig.setDefaults({
  loader: swig.loaders.fs(__dirname + "/src/templates"),
  cache: false
});

function collectPosts() {
  var posts = [];
  var date = [];
  return through.obj(
    function(file, enc, cb) {
      posts.push(file.page);
      posts[posts.length - 1].content = file.contents.toString();
      this.push(file);
      cb();
    },
    function(cb) {
      posts.sort(function(a, b) {
        return b.date - a.date;
      });
      site.posts = posts;
      cb();
    }
  );
}

function postURL() {
  return through.obj(function(file, enc, cb) {
    var basename = path.basename(file.path, ".md");
    file.page.url = basename;
    this.push(file);
    cb();
  });
}

function summarize(marker) {
  return through.obj(function(file, enc, cb) {
    var summary = file.contents.toString().split(marker)[0];
    file.page.summary = summary;
    this.push(file);
    cb();
  });
}

function applyTemplate(templateFile) {
  var tpl = swig.compileFile(path.join(__dirname, templateFile));
  return through.obj(function(file, enc, cb) {
    var data = {
      site: site,
      page: file.page,
      content: file.contents.toString()
    };
    file.contents = new Buffer(tpl(data), "utf8");
    this.push(file);
    cb();
  });
}

gulp.task("posts", function() {
  return gulp
    .src("src/posts/*.md")
    .pipe(frontMatter({ property: "page", remove: true }))
    .pipe(marked())
    .pipe(summarize("<!--more-->"))
    .pipe(postURL())
    .pipe(collectPosts())
    .pipe(applyTemplate("/src/templates/post.html"))
    .pipe(
      rename(function(path) {
        path.extname = ".html";
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("pages:html", ["posts"], function() {
  return gulp
    .src(["src/pages/**/*.html"])
    .pipe(
      through.obj(function(file, enc, cb) {
        var data = {
          site: site,
          page: {}
        };
        var tpl = swig.compileFile(file.path);
        file.contents = new Buffer(tpl(data), "utf8");
        this.push(file);
        cb();
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("pages:md", function() {
  return gulp
    .src("pages/**/*.md")
    .pipe(frontMatter({ property: "page", remove: true }))
    .pipe(marked())
    .pipe(applyTemplate("src/templates/default.html"))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("build"));
});

gulp.task("pages", ["pages:md", "pages:html"]);

gulp.task("buildAllPages", ["posts", "pages"]);

gulp.task("clean", function() {
  return gulp.src("build", { read: false }).pipe(rimraf());
});

gulp.task(
  "default",
  [
    "mainCss",
    "standAloneCss",
    "browser-sync",
    "buildAllPages",
    "mainJs",
    "standAloneJs",
    "copyImages",
    "copyFonts",
    "icons"
  ],
  function() {
    gulp.watch("src/scss/*.scss", ["mainCss"]);
    gulp.watch("src/css/standalone/**", ["standAloneCss", browserSync.reload]);
    gulp.watch("src/js/standalone/**", ["standAloneJs", browserSync.reload]);
    gulp.watch("src/js/*.js", ["mainJs", browserSync.reload]);
    gulp.watch("src/images/**", ["copyImages", browserSync.reload]);
    gulp.watch("src/fonts/**", ["copyFonts", browserSync.reload]);
    gulp.watch(
      ["src/pages/**/*", "src/posts/*.md", "src/templates/*.html"],
      ["posts", "pages", browserSync.reload]
    );
    gulp.watch("src/icons/*.sketch/Data", ["icons"]);
  }
);
