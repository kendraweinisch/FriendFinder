var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var app = express();

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static(path.join(__dirname, 'app/public')));
app.use("/", require("./app/routing/htmlRoutes")(app));
app.listen(5000)
