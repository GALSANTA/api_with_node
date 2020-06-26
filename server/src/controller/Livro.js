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

    excluir(res, dados) {
        connection.query("DELETE FROM tb_livro WHERE id="+dados.params, function(error, results, fields){
            if (error) {
                res.writeHead(500);
                res.end("\n");
            } else {
                res.writeHead(200);
                res.end("\n");
            }      
          });
    }

    pegar(res, dados) {
        connection.query("SELECT * FROM tb_livro WHERE id="+dados.params, function(error, results, fields) {
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