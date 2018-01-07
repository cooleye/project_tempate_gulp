// 加载插件
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    del = require('del'),
    htmlreplace = require('gulp-html-replace'),
    livereload = require('gulp-livereload');

// 编译样式文件件
gulp.task('style',function() {
    return gulp.src('app/less/**/*.less')
    .pipe(less())
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
});
// script
gulp.task('script',function() {
  return gulp.src('app/js/*.js')
    // .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
// images
gulp.task('images',function() {
  return gulp.src('app/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

//移动html
gulp.task('html',function(){
  gulp.src('app/html/*.html')
  .pipe(gulp.dest('dist/html'))
})


//移动html
gulp.task('lib',function(){
  gulp.src('app/lib/**/*.*')
  .pipe(gulp.dest('dist/lib'))
})

//clean
gulp.task('clean',function(){
    del('dist');
})

// 默认任务
gulp.task('default',["clean"], function() {
    setTimeout(function(){
      gulp.start('script', 'style', 'images','html','lib');
    },100)
});


// 监视
gulp.task('watch', function() {
  // 监视css文件的改动
  gulp.watch('app/less/**/*.less', ['style']);
  // 监视js文件的改动
  gulp.watch('app/js/*.js', ['script']);
  // 监视images文件的改动
  gulp.watch('app/images/*', ['images']);
  //监听html的改动
  gulp.watch('app/html/*', ['html']);
  // 创建浏览器自动刷新服务器
  livereload.listen();
  // dist目录下文件有改动就会浏览器刷新
  gulp.watch(['dist/**/*.*']).on('change', livereload.changed);
});
