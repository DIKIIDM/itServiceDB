var gulp = require('gulp');
var riot = require('gulp-riot');
var concat = require('gulp-concat')
var assets = {
	riot : [
		'./app/public/tags/**/*.tag'
	]
}

gulp.task('compile', async function() {
    gulp.src(assets.riot)
        .pipe(concat('tag.js'))
        .pipe(riot())
        .pipe(gulp.dest('./app/public/dist/riot'));
});