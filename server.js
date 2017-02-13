var express   = require('express');
var path      = require('path');
var config    = require(__dirname + '/app/config/config');
var app       = express();

app.config = config;
require('./app/config/express')(app, express);

app.listen(app.get('port'), function () {
    console.log("\n✔ Express server listening on port %d in %s mode",
        app.get('port'), app.get('env'));
});

module.exports = app;
