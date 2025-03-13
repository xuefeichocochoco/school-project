const http = require('http');
const port = 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<!DOCTYPE html><html><head><title>My School Project</title></head><body><h1>Hello World!</h1></body></html>');
}).listen(port);
console.log(`Server running at http://localhost:${port}/`);
