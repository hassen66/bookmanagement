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

    edit(req,res){
        Book.findByPk(req.params.id).then(book => {
            if(book)
            {
                if(req.query.e)
                    res.render('update',{book:book,"hasError":true});
                else
                    res.render('update',{book:book});
            }
            else{
                res.send("row does exist");
            }
        });
    }

    update(req,res){
        Book.update({ 
            title: req.body.title,
            author: req.body.author,
            max_page: req.body.max_page,
            publisher: req.body.publisher,
            asin: req.body.asin,
        },{
            where: {
              id: req.params.id
            }
        }).then(() => {
            res.redirect('/');
        })
        .catch(() => {
            res.redirect('/edit/'+req.params.id+'?e=' + encodeURIComponent('incorrect'));
        });

    }

}

module.exports = new BookControlller();