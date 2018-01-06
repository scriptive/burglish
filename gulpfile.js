/**
* gulp sass
* gulp script
* gulp test
* gulp watch


asset/
docs/

*/
//DEFAULT
var path=require('path'),Argv=require('minimist')(process.argv);
//COMMON PACKAGE
var fs=require('fs-extra'),clc=require('cli-color'),extend=require('node.extend');
//REQUIRE PACKAGE
var gulp=require('gulp'),sass=require('gulp-sass'),minifyCss=require('gulp-clean-css'),
uglify=require('gulp-uglify'),concat=require('gulp-concat'),include=require('gulp-include');
// REQUIRE DATA
var Package=JSON.parse(fs.readFileSync('package.json'));
// GULP
var configAssetRoot=Package.config.common.asset.root;
var configPublicRoot=Package.config.common.public.root;

var rootAsset=path.join(configAssetRoot);
var rootPublic=path.join(configPublicRoot);

var style = {
  normal:{
    sass:{
      debugInfo: false,
      lineNumbers: true,
      errLogToConsole: true,
      outputStyle: 'nested' //compact, expanded, nested, compressed,
    },
    js:{
      //mangle:false,
      output:{
          beautify: true,
          comments:'license'
      },
      compress:false
      //outSourceMap: true
    }
  },
  compressed:{
    sass:{
      debugInfo: true,
      lineNumbers: false,
      errLogToConsole: true,
      outputStyle: 'compressed'
    },
    js:{
      mangle:true,
      output:{
      }
    }
  },
};

var codeStyle = Argv.style;
if (codeStyle && style[codeStyle]) {
  codeStyle = style[codeStyle];
} else {
  codeStyle=style.compressed;
}
// NOTE: SASS
gulp.task('sass', function () {
  return gulp
    .src(path.join(rootAsset,'sass','*([^A-Z0-9-]).scss'))//!([^A-Z0-9-])
    .pipe(sass(codeStyle.sass).on('error', sass.logError))
    .pipe(gulp.dest(path.join(rootPublic,'css')));
});
// NOTE: SCRIPT
gulp.task('script',function(){
    gulp.src(path.join(rootAsset,'javascript','*([^A-Z0-9-]).js'))
    //.pipe(concat('all.min.js'))
    .pipe(include().on('error', console.log))
    .pipe(uglify(codeStyle.js).on('error', console.log))
    .pipe(gulp.dest(path.join(rootPublic,'js')));
});
// NOTE: WATCH
gulp.task('watch', function() {
    gulp.watch(path.join(rootAsset,'sass','*.scss'), ['sass']);
    gulp.watch(path.join(rootAsset,'javascript','*.js'), ['script']);
});
// NOTE: TASK
gulp.task('default', ['watch']);
