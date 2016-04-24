jQuerify
==========
You can easily adapt jQuery plugin to work with jQuery

Usage
--------

```gulpfile.js
var gulp = require('gulp');
var rename = require('gulp-rename');
var jquerify = require('jquerify');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('js',function(){
	gulp.src(["./js/main.js"])
		.pipe(browserify({
			jquery:'jquery-browserify',
			transform: ['jquerify'],
		}))
		.pipe(gulp.dest("./js/dist"));
});
```


```main.js
(function(){
	var $ = require("jquery-browserify");
	var autoAlign = require("./autoAlign.js");
	autoAlign($);
	$(window).load(function(){
		$(".js-autoHeight").autoAlign({
			columns:2,
			columnsTablet:[768,3],
			columnsDesktopSmall:[992,4]
		});
	});
})();
```