/**
  * npm run task -- --app=myordbok --script=scan --start=???
  */
//DEFAULT
path=require('path'),Argv=require('minimist')(process.argv);
//COMMON PACKAGE
fs=require('fs-extra'),clc=require('cli-color'),extend=require('node.extend');
//REQUIRE PACKAGE
gulp=require('gulp'),sass=require('gulp-sass'),minifyCss=require('gulp-minify-css'),uglify=require('gulp-uglify'),concat=require('gulp-concat'),include=require('gulp-include');
// REQUIRE DATA
Package=JSON.parse(fs.readFileSync('package.json'));
// GULP
var configAssetRoot=Package.config.common.asset.root;
var configPublicRoot=Package.config.common.public.root;
var configDevelopmentRoot=Package.config.common.development.root;

rootApp=path.join(configAssetRoot,Argv.app);
rootAsset=path.join(rootApp,configDevelopmentRoot);
dirDevelopments=path.join(configAssetRoot,Argv.app);
rootDevelopment=path.join(dirDevelopments,configDevelopmentRoot);
rootTask = path.join(rootDevelopment,Package.config.common.development.task);
// rootScript = path.resolve(rootDevelopment,Package.config.common.development.task,Argv.script);
try {
  const targetScript = require(path.resolve(rootTask,Argv.script));
  new targetScript()[Argv.start || 'start']();
} catch (e) {
  console.log(e);
} finally {
  // console.log(Argv);
}
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'search',
  database : 'myordbok'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
*/
