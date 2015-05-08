var gulp = require('gulp')

var msx = require('msx')
var through = require('through2')
var plumber = require('gulp-plumber')
var gutil = require('gulp-util')
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");



var testJSX = './test/jsx/*.jsx'
var jsSrc = './resources/public/js'
var jsxSrc = './resources/public/js/m/**/*.jsx'
var jsxDst = './resources/public/js/m'


function msxTransform(name) {
  return through.obj(function (file, enc, cb) {
    try {
      file.contents = new Buffer(msx.transform(file.contents.toString()))
      file.path = gutil.replaceExtension(file.path, '.js')
    }
    catch (err) {
      err.fileName = file.path
      this.emit('error', new gutil.PluginError('msx', err))
    }
    this.push(file)
    cb()
  })
}


gulp.task('msx', function() {
  return gulp.src(jsxSrc)
    .pipe(plumber())
    .pipe(msxTransform())
    .on('error', function(e) {
      console.error(e.message + '\n  in ' + e.fileName)
    })
    .pipe(gulp.dest(jsxDst))
})


gulp.task('watch', function() {
  var watcher = gulp.watch([jsSrc], ['msx', 'browserify'])
  watcher.on('change', function(event) {
	  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
})

// package all that crap into a single pile
gulp.task('browserify', function() {
    // Single entry point to browserify
    gulp.src('./resources/public/js/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(rename(function (path) {
	        // path.dirname += "/ciao";
	        path.basename += "-combined";
	        //path.extname = ".md"
	    }))
        .pipe(gulp.dest('./resources/public/js/'))
});

gulp.task('default', ['watch', 'msx', 'browserify'])
