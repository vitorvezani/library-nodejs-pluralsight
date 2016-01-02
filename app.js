var express = require('express');

var app = express();
var port = 8080;

// Public folder static config
app.use(express.static('public'));
app.use(express.static('src/views'));

// Routes
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/books', function(req, res) {
  res.send('Hello World!');
});

app.listen(port, function(err) {
  console.log('running server on port: ' + port);
});
