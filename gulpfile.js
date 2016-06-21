gulp = require("gulp");

// css processing
postcss = require("gulp-postcss");
cssnext = require('postcss-cssnext');
cssnano = require('gulp-cssnano');

// packaging & util
tar = require('gulp-tar');
gzip = require('gulp-gzip');
clean = require('gulp-clean');

pkg = require('./package.json');

// paths
src_dir = './src';
build_root = './build';
build_name = pkg.name + '-' + pkg.version;
build_dir = build_root + '/' + build_name;
docroot = build_dir + '/docroot';

dist_root = './dist';

// source globs
static_src = [
  src_dir + '/*.html',
  src_dir + '/*.png'
];
css_src = src_dir + '/*.css';

// tasks

gulp.task('default', ['package']);
gulp.task('build', ['static', 'css']);

gulp.task('static', function() {
  return gulp.src(static_src)
      .pipe(gulp.dest(docroot));
});

gulp.task('css', function() {
  var processors = [
    cssnext()
  ]
  return gulp.src(css_src)
      .pipe(postcss(processors))
      .pipe(cssnano())
      .pipe(gulp.dest(docroot));
});

gulp.task('package', ['build'], function() {
  return gulp.src(build_dir + '/**/*', { base: build_root })
      .pipe(tar(build_name + '.tar'))
      .pipe(gzip())
      .pipe(gulp.dest(dist_root));
});

gulp.task('clean', function() {
  return gulp.src([build_root, dist_root])
      .pipe(clean());
});

gulp.task('watch', function() {
  gulp.watch(static_src, ['static']);
  gulp.watch(css_src, ['css']);
});
