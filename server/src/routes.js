const Livro = require('./controller/Livro');

const livro = new Livro();
const routes = {

    "/": async function(dados, res) {
      if (dados.method === "GET") livro.listar(res);
    },
    "excluir/:id": async function(dados, res) {
      if (dados.method === "DELETE") livro.excluir(res,dados);
    },
    "edit/:id": async function(dados, res) {
      if (dados.method === "GET") livro.pegar(res, dados);
      else if (dados.method === "PUT") livro.editar(res, dados);
    },
    "add": async function(dados, res) {
      if (dados.method === "POST") livro.cadastrar(res, dados);
    },
    notFound: function(data, res) {
        console.log("NOTFOUND");
    }
  };

module.exports = routes;