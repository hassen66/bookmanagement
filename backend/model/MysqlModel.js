const mysql = require('mysql')

class MysqlModel {

    static connect() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'booklist'
        });
        this.connection.connect();

        this.primaryKey = 'id';
        this.table = 'books';
    }

    static saveResult(value) {
        var result;
        result = value;
        return result;
    }

    static all()
    {

        MysqlModel.connect();

        return new Promise( ( resolve, reject ) => {
            this.connection.query('SELECT * from '+this.table, function (err, rows, fields) {
                if (err) throw reject( err )
                
                resolve( rows );
            })
        });
    }
}

module.exports = MysqlModel;

// const primaryKey = 'id';
// const table = 'books';

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'booklist'
// });
// connection.connect();

// module.exports.all = function ()
// {
//     return new Promise( ( resolve, reject ) => {
//         connection.query('SELECT * from '+table, function (err, rows, fields) {
//             if (err) throw reject( err )
            
//             resolve( rows );
//         })
//     });
// }
