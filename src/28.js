let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

app.listen(3000);
