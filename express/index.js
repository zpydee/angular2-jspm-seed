var path = require('path');
var express = require('express');
var staticPaths = require('./config/static-paths');
var routes = require('./config/routes');

var app = express();
var port = 3283;
var rootPath = path.normalize(__dirname + '/..');

staticPaths.init(app, rootPath);
routes.init(app);

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`-----------------------------------------------------\nlistening on port ${port}\nserving from root ${rootPath}\n-----------------------------------------------------`);
});