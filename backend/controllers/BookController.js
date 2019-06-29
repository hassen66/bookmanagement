class BookControlller{

    constructor(){

    }

    index(req,res){
        res.send('Hello World!');
    }
}

module.exports = new BookControlller();