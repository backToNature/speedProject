/**
 * Created by wenshui on 15/2/2.
 */
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');


// init初始化目录
gulp.task('init', function () {
    fs.exists('./src', function (exists) {
        var arr = ['js', 'css', 'html', 'lib'];
        if(exists) {
            arr.forEach(function(item) {
                fs.exists('./src/' + item, function (exists) {
                    if (!exists) {
                        fs.mkdir('./src/' + item);
                    }
                });
            });
        } else {
            fs.mkdir('./src');
            arr.forEach(function(item) {
                fs.exists('./src/' + item, function (exists) {
                    if (!exists) {
                        fs.mkdir('./src/' + item);
                    }
                });
            });
        }
    });
    fs.exists('./demo', function (exists) {
        if(!exists) {
            fs.mkdir('./demo');
        }
    });
});

// 购建工程
gulp.task('build', function() {

});