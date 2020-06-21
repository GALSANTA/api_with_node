const Livro = require('./controller/Livro');

const routes = {

    "/": async function(dados, res) {
        console.log("/");
        console.log(dados);
    },
    "excluir/:id": async function(dados, res) {
        console.log("EXCLUIR");
        console.log(dados);
    },
    notFound: function(data, res) {
        console.log("NOTFOUND");
        console.log(dados);
    }
  };

module.exports = routes;