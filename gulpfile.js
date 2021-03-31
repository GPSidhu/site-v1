'use strict'

// dependencies
const gulp = require('gulp')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const changed = require('gulp-changed')

// Input/output paths for SCSS/CSS
var SRC_SCSS = './src/assets/scss/**/*.scss'
var DEST_SCSS = './src/assets/css'

// Tasks to compile SCSS
function compile_scss(cb) {
    gulp.src(SRC_SCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(DEST_SCSS))
    .pipe(gulp.dest(DEST_SCSS))
    cb()
}

exports.default = function() {
    gulp.watch(SRC_SCSS, compile_scss)
}
