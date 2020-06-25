import React from 'react';


function Card({ dados }) {
  console.log(dados);
  let { autor, nome, sinopse, editora, idioma, data_publicao, url } = dados;
  var d = new Date(data_publicao);
  data_publicao = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
  
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card horizontal">
          <div className="card-image">
            <img style={{width:200}} src={url}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title grey-text text-darken-4">{nome} - {editora}</span>
              <span>
                Autor: {autor} <br/>
                Idioma: {idioma} <br/>
                Data de publicação: {data_publicao} 
              </span>
              <p> Sinopse: <br/>{sinopse}</p>
            </div>
            <div className="card-action">
              <a className="right" href="#">Editar</a>
              <a className="right" href="#">Excluir</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;