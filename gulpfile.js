gulp = require("gulp");
postcss = require("gulp-postcss");
cssnext = require('cssnext');
cssnano = require('gulp-cssnano');
clean = require('gulp-clean');

src_dir = './src';
build_root = './build';
build_dir = build_root + '/lfsite-www';

gulp.task('default', ['static', 'css']);

gulp.task('static', function() {
  var static_src = [
    src_dir + '/*.html',
    src_dir + '/*.png'
  ];
  return gulp.src(static_src)
      .pipe(gulp.dest(build_dir));
});

gulp.task('css', function() {
  var processors = [
    cssnext()
  ]
  return gulp.src(src_dir + "/*.css")
      .pipe(postcss(processors))
      .pipe(cssnano())
      .pipe(gulp.dest(build_dir));
});

gulp.task('clean', function() {
  return gulp.src(build_root)
      .pipe(clean());
});
