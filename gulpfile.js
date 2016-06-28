var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyHTML = require('gulp-minify-html');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config.js');
var browserSync = require("browser-sync");

gulp.task("default", ["dev-server"]);
gulp.task('build-dev', ['webpack:build-dev', 'html:minify'], function () {
  gulp.watch(["src/**/*"], ['webpack:build-dev', 'html:minify']);
});
gulp.task('build', ['webpack:build', 'html:minify']);

gulp.task('html:minify', function() {
  return gulp.src('./assets/*.html')
    .pipe(minifyHTML({empty: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('webpack:build', function (callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
  	new webpack.optimize.DedupePlugin(),
  	new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, function(err, stats) {
  	if(err) throw new gutil.PluginError("webpack:build", err);
  	gutil.log("[webpack:build]", stats.toString({
  		colors: true
  	}));
  	callback();
  });
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
 	// run webpack
 	devCompiler.run(function(err, stats) {
 		if(err) throw new gutil.PluginError("webpack:build-dev", err);
 		gutil.log("[webpack:build-dev]", stats.toString({
 			colors: true
 		}));
    callback();
  });
});

gulp.task("dev-server", function(callback) {
  var myConfig = Object.create(webpackConfig);
  var compiler = webpack(myConfig);
  browserSync({
    notify: false,
    startPath: './index.html',
    server: {
      //baseDir: myConfig.output.publicPath,
      baseDir: "build",
      middleware: [
        webpackDevMiddleware(compiler, {
          publicPath: webpackConfig.output.publicPath,
          stats: { colors: true }
        }),
        webpackHotMiddleware(compiler)
      ]
    }
  });
});
