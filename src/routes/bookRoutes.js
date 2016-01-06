var express = require('express');
var bookRouter = express.Router();

var router = function (nav) {

    var books = [{
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Niko',
        read: false
    }, {
        title: 'War and Peace 2',
        genre: 'Historical Fiction',
        author: 'Lev Niko',
        read: false
    }, {
        title: 'War and Peace 3',
        genre: 'Historical Fiction',
        author: 'Lev Niko',
        read: false
    }, {
        title: 'War and Peace 4',
        genre: 'Historical Fiction',
        author: 'Lev Niko',
        read: false
    }, {
        title: 'War and Peace 5',
        genre: 'Historical Fiction',
        author: 'Lev Niko',
        read: false
    }];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('books', {
                title: 'Hello World!',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('book', {
                title: 'Hello World!',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};

module.exports = router;