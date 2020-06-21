const con = require('./src/database/DBconnect');


con.query("SELECT * FROM tb_livro", function(error, results, fields){
    console.log(results);
});