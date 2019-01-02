const gulp = require('gulp');
var gulpSassPlugin = require('gulp-sass');

gulpSassPlugin.compiler = require('sass');

var sassConfig = {
    includePaths: ['node_modules']
};

function sassCompile() {
    return gulp.src('sass/**/*.scss', {sourcemaps: true})
        .pipe(
          gulpSassPlugin.sync(sassConfig)
              .on('error', gulpSassPlugin.logError)
        )
        .pipe(gulp.dest('css', {sourcemaps: true}));
}
sassCompile.description =
    'Compiles scss file from sass/ to css/';
exports.sass = sassCompile;

function sassWatch() {
    gulp.watch(
        'sass/**/*.scss',
        { ignoreInitial: false },
        sassCompile
    );
}
sassWatch.description = 'watch style changes';
exports['sass:watch'] = sassWatch;

exports.default = gulp.parallel(sassWatch);