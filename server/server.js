const http = require("http");
const url = require("url");
const routes = require('./src/routes');

let dados = {}

const server = http.createServer(function (req, res) {

    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.pathname;
    let headers = req.headers;
    let method = req.method.toLowerCase();
  
  
    dados.headers = headers;
    dados.method = method
    dados.path = path;
    dados.route = whatRoute(dados.path);
  
    
    req.on("data", function (data) {
      if (dados.method == "post") dados.data = data.toString("utf-8");
    });
  
    req.on("end", function () {
        let route = routes[dados.route];
        route(dados, res);
    });
  
  
  });
  
  server.listen(3333, function () {
    console.log("Listening on port 3333");
  });
  
  function whatRoute(path) {
  
    if (path == "/") return "/";
  
    path = path.replace(/^\/+|\/+$/g, "").split("/");
  
    retorno = [];
  
    for (var i in routes) {
      var rota = i.split("/");
      for(r in rota) {
        if (rota[r] != ":id") {
          if (rota[r] == path[r]) retorno.push(rota[r]);
          else break;
        } else {
          dados.params = path[r];
          retorno.push(":id")
          break;
        }
      }
    }
  
    return buildRoute(retorno);
  }
  
  function buildRoute(array) {
  
    let d ="";
  
    if (array.length == 0) return "notFound";
  
    for (let index = 0; index < array.length; index++) {
        if (index < array.length - 1) {
          d += array[index] + "/";
        } else {
          d += array[index];
        }
      }
  
      return d;
  }
