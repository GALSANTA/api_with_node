const connection = require('../database/DBconnect');

class Livro {
    
    listar() {
        connection.query("SELECT * FROM tb_livro", function(error, results, fields){
            console.log(results);
        });
    }
}


module.exports = Livro;