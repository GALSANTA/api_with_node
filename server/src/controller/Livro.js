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

    editar(res, dados) {
        let {id, nome, autor, idioma, editora, data_publicacao, url, sinopse} = JSON.parse(dados.data);
        data_publicacao = data_publicacao.split('/');
        data_publicacao = data_publicacao[2] + '-' + data_publicacao[1] + '-' + data_publicacao[0];

        let sql = `UPDATE tb_livro
           SET nome = ?,
           editora= ?,
           autor= ?,
           idioma= ?,
           sinopse= ?,
           url= ?,
           data_publicacao= ?
           WHERE id = ?`;

           
           let data = [nome, editora, autor, idioma, sinopse, url, data_publicacao, id];

        
        connection.query(sql, data, function(error, results, fields) {
            if (error) {
                console.log("ERRO"+error)
                res.writeHead(500);
                res.end("\n");
            } else {
                console.log("SUCCESS");
                res.writeHead(200);
                res.end("\n");
            }
        });
    }

    cadastrar(res, dados) {
        let { nome, autor, idioma, editora, data_publicacao, url, sinopse} = JSON.parse(dados.data);
        data_publicacao = data_publicacao.split('/');
        data_publicacao = data_publicacao[2] + '-' + data_publicacao[1] + '-' + data_publicacao[0];


        let sql = "INSERT INTO tb_livro ( nome, editora, autor, idioma, sinopse, url, data_publicacao) VALUES (?, ?, ?, ?, ?, ?, ?)";

           
        let data = [nome, editora, autor, idioma, sinopse, url, data_publicacao];

        
        connection.query(sql, data, function(error, results, fields) {
            if (error) {
                console.log("ERRO"+error)
                res.writeHead(500);
                res.end("\n");
            } else {
                console.log("SUCCESS");
                res.writeHead(200);
                res.end("\n");
            }
        });
    }
}


module.exports = Livro;