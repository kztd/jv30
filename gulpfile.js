var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('css/*.css')
    .pipe(autoprefixer())
    .pipe('build')
});

gulp.task('watch', function(){
    gulp.watch('css/*.css', ['styles']);

});
