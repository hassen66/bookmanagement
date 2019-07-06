const Book = require('../model/Book');
class BookControlller{

    constructor(){

    }

    index(req,res){
        Book.findAll().then(books => {
            res.render('index',{books:books});
        });
    }

    store(req,res){
        let book;
        Book.create({ 
            title: req.body.title,
            author: req.body.author,
            max_page: req.body.max_page,
            publisher: req.body.publisher,
            asin: req.body.asin,
        }).then(book => {
            res.render('index',{"hasError":false});
        })
        .catch(() => {
            res.render('index',{"hasError":true});
        });

        
    }
}

module.exports = new BookControlller();