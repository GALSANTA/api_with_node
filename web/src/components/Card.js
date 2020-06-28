import React from 'react';
import api from '../service/api';

function Card({ dados }) {
  console.log(dados);
  let { id, autor, nome, sinopse, editora, idioma, data_publicacao, url } = dados;
  var d = new Date(data_publicacao);
  var mes = d.getMonth()<10?"0"+(d.getMonth()+1):d.getMonth()+1;
  data_publicacao = d.getDate()+"/"+mes+"/"+d.getFullYear();

  const removeProduct = function (event) {
    event.preventDefault();
    api.remove(id).then(()=>{
      console.log("Exccluiu")
    });
    
  }

  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card horizontal">
          <div className="card-image">
            <img style={{width:200}} src={url} alt=""/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title grey-text text-darken-4">{nome} - {editora}</span>
              <span>
                Autor: {autor} <br/>
                Idioma: {idioma} <br/>
                Data de publicação: {data_publicacao} 
              </span>
              <p> Sinopse: <br/>{sinopse}</p>
            </div>
            <div className="card-action">
              <a className="right" href={`/edit/${id}`}>Editar</a>
              <a className="right" onClick={event => { removeProduct(event) }}>Excluir</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;