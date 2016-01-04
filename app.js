'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

// Public folder static config
app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');

// Routes
app.get('/', function (req, res) {
    res.render('index', {list: ['a', 'b']});
});

app.get('/books', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function (err) {
    console.log('running server on port: ' + port);
});