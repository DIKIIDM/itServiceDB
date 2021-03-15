var gulp = require('gulp');
var riot = require('gulp-riot');
var assets = {
	riot : [
		'./app/tags/**/*.tag'
	]
}

gulp.task('compile', async function() {
	gulp.src(assets.riot)
	   .pipe(riot())
	   .pipe(gulp.dest('./dist/riot'))
});