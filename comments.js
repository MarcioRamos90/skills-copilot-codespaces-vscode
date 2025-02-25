// Create a web server
// Listen for requests on port 3000
// Respond with a list of comments

var http = require('http');
var fs = require('fs');

var comments = ['Comment 1', 'Comment 2', 'Comment 3'];

var server = http.createServer(function (req, res) {
  console.log('Request received');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(comments));
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});
