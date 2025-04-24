// Node.js example for handling multiple clients
var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.url === '/users') {
    // Handle user request and send back response
    var user = req.query.user;
    res.writeHead(200);
    res.end(user + ' is logged in!');
  } else if (req.url === '/about') {
    // Handle about page request and send back response
    res.writeHead(200);
    res.end('This is the /about page.');
  }
});

server.listen(3000, function() {
  console.log('Server running at http://localhost:3000');
});
