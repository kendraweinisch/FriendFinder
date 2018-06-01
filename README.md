FriendFinder takes in the 1-5 ratings on 10 questions then compares the answers to find another user with similar answers.
User load the homepage with button to start survey
user clicks button and survey.html is loaded
Two fields for text, 10 questions with drop-down menus answers, a submit button
user answers questions and clicks submit
collect data
submit data to web server
**on server side (in node.js)
receive data
compare new user to all existing users
found most similar user
respond with matched user name
adding user to the database
**on the frontend
rendering results
