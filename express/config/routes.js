var express = require('express');

exports.init = function(app) {
    'use strict';
    app.get('/', (req, res) => {
        res.render(`index.html`);
    });
}