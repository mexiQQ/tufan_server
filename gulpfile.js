var gulp = require('gulp');

var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// 编译sass
gulp.task('sass', function () {
    return gulp.src('public/sass/*.sass')
	    .pipe(sass().on('error', function (err) {
            console.error('Error!', err.message);
        }))
        .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('minifycss', function() {
	return gulp.src('public/stylesheets/*.css') // 压缩的文件
		.pipe(concat('all.css')) // 合并后的文件名
		.pipe(gulp.dest('public/stylesheets/'))   //输出文件夹
		.pipe(rename({suffix: '.min'}))    //rename压缩后的文件夹
		.pipe(minifycss()) // 执行压缩
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
		.pipe(gulp.dest('public/stylesheets/mini/'));
});

// 将所有js文件连接为一个文件并压缩，存到public/js
gulp.task('concatJs', function() {
    gulp.src(['public/javascripts/*.js']) // 压缩的文件
        .pipe(concat('all.js'))// 合并后的文件名
        .pipe(uglify())
		.pipe(rename({suffix: '.min'}))    //rename压缩后的文件夹
        .pipe(gulp.dest('public/javascripts/mini/')); //输出文件夹
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动任务
gulp.task('default', ['sass', 'concatJs', 'minifycss']);

