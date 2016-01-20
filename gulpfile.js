// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');



// Lint Task
gulp.task('lint', function() {
    return gulp.src('views/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minify_scripts', function() {
    return gulp.src('views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js'));
});

gulp.task('minify_scripts2', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minify_css', function() {
   return gulp.src('views/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/views/css'))
});

gulp.task('minify_css2', function() {
   return gulp.src('css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('minify_html', function() {
  return gulp.src('views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'))
});

gulp.task('minify_html2', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});
 
gulp.task('compress_images', () => {
    return gulp.src('views/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/views/images'));
});

gulp.task('compress_img', () => {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});


// Default Task
gulp.task('default', ['lint', 'minify_scripts', 'minify_scripts2', 'minify_css', 'minify_css2', 'minify_html', 'minify_html2', 'compress_images', 'compress_img']);