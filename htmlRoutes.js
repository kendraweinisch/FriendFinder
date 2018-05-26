var express = require('express');
var path = require("path");
var router = express.Router();
router.get("/", function (request, response) {
    response.sendfile("home.html")
})

router.get("/survey", function (request, response) {
    response.sendfile("survey.html")
})
module.exports = router