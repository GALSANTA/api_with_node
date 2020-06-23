const connection = require('../database/DBconnect');

class Livro {
    
    listar(res) {
        connection.query("SELECT * FROM tb_livro", function(error, results, fields){
            if (error) {
                res.writeHead(500);
                res.end("\n");
            } else {
                let payloadStr = JSON.stringify(results);
                res.setHeader("Content-Type", "application/json");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.writeHead(200);
                res.write(payloadStr);
                res.end("\n");
            }      
          });
    }
}


module.exports = Livro;