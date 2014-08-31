---
title: "Useful gulp recipes"
date: 2014-10-19
---
I've been using gulp a lot recently and in this article I've put together a few of the tasks that have improved my workflow.

<!--more-->
- [Set file paths](#set-file-paths)
- [Copy and optimise images](#copy-and-optimise-images)
- [Pass an argument from the command line](#pass-an-argument-from-the-command-line)
- [Concatenate javascript, deal with coffee files, minify and create sourcemaps](#concatenate-javascript-deal-with-coffee-files-minify-and-create-sourcemaps)
- [Split tasks up into reusable chunks with lazypipe](#split-tasks-up-into-reusable-chunks-with-lazypipe)

This article doesn't really go into what gulp is and how to get started. It also assumes some level of basic familiarity.

#### Set file paths
One of the first things to set up in your gulpfile are the asset paths. How this should look for you will depend on the file structure of your project but here's a basic example to get started with:
<pre>
  <code class="language-javascript">
var basePath = {
  src  : &apos;src/assets/&apos;,
  dest : &apos;public/assets/&apos;
};

var srcAssets = {
  styles  : basePath.src + &apos;stylesheets/&apos;,
  scripts : basePath.src + &apos;javascripts/&apos;,
  images  : basePath.src + &apos;images/&apos;
};

var destAssets = {
  styles  : basePath.dest + &apos;stylesheets/&apos;,
  scripts : basePath.dest + &apos;javascripts/&apos;,
  images  : basePath.dest + &apos;images/&apos;
};
  </code>
</pre>
and use them in your gulp tasks like this:
<pre>
 <code class="language-javascript">
gulp.task(&apos;sass&apos;, function () {
  gulp.src(srcAssets.styles + &apos;**/*.scss&apos;)
    .pipe(sass())
    .pipe(gulp.dest(destAssets.styles));
});
  </code>
</pre>

#### Copy and optimise images
This task will copy across your images from the source folder to the destination folder and optimise them but it won't run unnecessarily. By that I mean it will check if the image already exists and it if it does then it will check the mdate (date modified) to see if the source file is newer or not. As a result it will only run on images that need processing.

<pre>
 <code class="language-javascript">
// Required gulp packages
var newer    = require(&apos;gulp-newer&apos;),
    imagemin = require(&apos;gulp-imagemin&apos;);

gulp.task(&apos;copyImages&apos;, function() {
  return gulp.src(srcAssets.styles.images)
    .pipe(newer(destAssets.images))
    .pipe(imagemin())
    .pipe(gulp.dest(destAssets.images));
});
  </code>
</pre>

#### Pass an argument from the command line
This example will let you reuse tasks but with some extra processes to get files ready for production if the argument passed from the command line was `gulp production`.

<pre>
 <code class="language-javascript">
// Required gulp packages
var gutil     = require('gulp-util'),
    gulpif    = require('gulp-if'),
    minifyCSS = require('gulp-minify-css'),
    sass      = require('gulp-sass');

// Set some defaults
var isDev  = true;
var isProd = false;

// If "production" is passed from the command line then update the defaults
if(gutil.env._[0] === 'production') {
  isDev  = false;
  isProd = true;
}

// Minify CSS if preparing for production
gulp.task(&apos;sass&apos;, function () {
  gulp.src(srcAssets.styles + &apos;**/*.scss&apos;)
    .pipe(sass())
    .pipe(gulpif(isProd, minifyCSS()))
    .pipe(gulp.dest(destAssets.styles));
});
  </code>
</pre>

#### Concatenate javascript, deal with coffee files, minify and create sourcemaps
This task will:
- Create sourcemaps if in development mode
- Compile coffee files in they have a `.coffee` extension
- Concat all your javascript files
- Minify javascript if preparing for production

<pre>
 <code class="language-javascript">
// Required gulp packages
var uglify     = require(&apos;gulp-uglify&apos;),
    coffee     = require(&apos;gulp-coffee&apos;),
    gulpif     = require(&apos;gulp-if&apos;),
    concat     = require(&apos;gulp-concat&apos;),
    sourcemaps = require(&apos;gulp-sourcemaps&apos;),
    gutil      = require(&apos;gulp-util&apos;);

gulp.task(&apos;scripts&apos;, function() {
  gulp.src([srcAssets.scripts + &apos;foo.coffee&apos;,
            srcAssets.scripts + &apos;bar.js&apos;])
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(gulpif(/[.]coffee$/, coffee()))
    .pipe(concat('app.js'))
    .pipe(gulpif(isDev, sourcemaps.write()))
    .pipe(gulpif(isDev, gulp.dest(destAssets.scripts)))
    .pipe(gulpif(isProd, uglify()))
    .pipe(gulpif(isProd, gulp.dest(destAssets.scripts)));
  </code>
</pre>

#### Split tasks up into reusable chunks with lazypipe
[lazypipe](https://www.npmjs.org/package/lazypipe "Node lazypipe") is a really useful node package which allows you to split your gulp tasks into small reusable chunks. Here's a simple demo:
<pre>
 <code class="language-javascript">
// Required gulp packages
var sass     = require('gulp-sass'),
    lazypipe = require('lazypipe'),
    prefix   = require('gulp-autoprefixer');

// Create the reusable chunk of code
var sassTask = lazypipe()
  .pipe(sass)
  .pipe(prefix)
  .pipe(gulp.dest, destAssets.styles);

// Use it in a task that builds all stylesheets
gulp.task('allCss', function() {
  return gulp.src(srcAssets.styles + '**/*.scss')
    .pipe(sassTask());
});

// Use it in a task that builds only application styles
gulp.task('appCss', function() {
  return gulp.src(srcAssets.styles + 'application.scss')
    .pipe(sassTask());
});
    </code>
</pre>

How is this useful? If you work on a project that builds multiple CSS files by default you might want to have a streamlined task that only builds the CSS for one part of the project. For example you might do `gulp watch` to watch everything and `gulp watchApp` to build only application files. I work at [wegowise](https://wegowise.com) and our default gulp task builds 17 CSS files. The CSS files are built from a mix of shared and unique styles so when you change any `.scss` file all the CSS files are rebuilt. Even using node sass this can take a few seconds so I use lazypipe to create some more streamlined watch tasks.

I hope these gulp recipes are useful and if you have any questions or suggestions on how they could be improved I'd love to hear from you in the comments.
