var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('js', function () {
    watch('./app/assets/js/**.js', function () {
        return gulp.src('./app/assets/js/script.js')
            .pipe(gulp.dest('./app'));
    })
})