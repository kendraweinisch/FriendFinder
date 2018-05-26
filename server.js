var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static(path.join(__dirname, 'app/public')));
require("./app/routing/html-routes")(app);
require("./app/routing/api-routes")(app);
app.listen(6000)