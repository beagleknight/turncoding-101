var gulp         = require('gulp'),
    jshint       = require('gulp-jshint'),
    concat       = require('gulp-concat'),
    connect      = require('gulp-connect'),
    SCRIPT_FILES = ['src/js/main.js', 'src/js/**/*.js'],
    STYLE_FILES  = ['src/css/reset.css', 'src/css/main.css', 'src/css/**/*.css'];

gulp.task('scripts', function() {
    return gulp.src(SCRIPT_FILES)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('styles', function() {
    return gulp.src(STYLE_FILES)
        .pipe(concat('build.css'))
        .pipe(gulp.dest('./public/css'))
});

gulp.task('build', ['scripts', 'styles']);

gulp.task('connect', function() {
    connect.server({
        root: 'public'
    });
});

gulp.task('default', ['connect', 'build'], function () {
    gulp.watch(SCRIPT_FILES, ['scripts']);
    gulp.watch(STYLE_FILES, ['styles']);
});
