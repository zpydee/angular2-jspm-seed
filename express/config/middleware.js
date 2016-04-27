
var express = require('express');

exports.init = function (app, rootPath){
    'use strict';
    app.use(express.static(rootPath + '/app/'));
    app.use(express.static(rootPath));
}