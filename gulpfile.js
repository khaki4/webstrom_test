/**
 * Created by jiwon on 08/05/2017.
 */
var gulp = require('gulp');

gulp.task('Hello', function () {
    console.log('hello gulp');
});

gulp.task('default', ['Hello']);