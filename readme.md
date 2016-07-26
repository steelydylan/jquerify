jQuerify
==========
You can easily adapt jQuery plugin to work with jQuery in browserify environment without making global jQuery object

Download
--------

```
npm install jquerify
```

Usage
--------

gulpfile.js

```js
var gulp = require('gulp');
var rename = require('gulp-rename');
var jquerify = require('jquerify');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task("js",function(){
	browserify('./js/main.js')
	.transform(jquerify({
		files:[
			"./js/autoAlign.js"
		]
	}))
	.bundle()
	.pipe(source('main.js'))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest('./js/dist'));
});
```

main.js

```js
(function(){
	var $ = require("./jquery.js");
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