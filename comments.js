// Create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/comments', function(request, response) {
  response.sendFile(__dirname + '/views/comments.html');
});
app.get('/comments/:id', function(request, response) {
  response.sendFile(__dirname + '/views/comment.html');
});
app.listen(3000, function() {
  console.log('Web server started on port 3000');
});