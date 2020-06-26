const Livro = require('./controller/Livro');

const livro = new Livro();
const routes = {

    "/": async function(dados, res) {
      if (dados.method === "get") livro.listar(res);
    },
    "excluir/:id": async function(dados, res) {
      if (dados.headers["access-control-request-method"].toLowerCase() === "delete") livro.excluir(res,dados);
    },
    notFound: function(data, res) {
        console.log("NOTFOUND");
        console.log(dados);
    }
  };

module.exports = routes;