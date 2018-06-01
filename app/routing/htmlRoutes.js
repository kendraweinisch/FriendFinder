var express = require('express');
module.exports = function(app) {
var router = express.Router(app)
router.get("/", function (request, response) {
    response.sendFile("C:\Users\kendr\Desktop\Bootcamp_Assignments\Homework\Homework Assignment 10\FriendFinder\app\public\home.html")
})

router.get("/survey", function (request, response) {
    response.sendFile("survey.html")
})
return router
}
