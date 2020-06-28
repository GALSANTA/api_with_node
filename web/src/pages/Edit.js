import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import api from '../service/api';

function Edit(data) {

    let [nome, setNome] = useState();
    let [autor, setAutor] = useState();
    let [idioma, setIdioma] = useState();
    let [editora, setEditora] = useState();
    let [data_publicacao, setData] = useState();
    let [url, setUrl] = useState();
    let [sinopse, setSinopse] = useState();


    let [redirect, setRedirect] = useState(false);


    useEffect((e) => {
        var k = Promise.resolve(api.getLivro(data.match.params.id));
        k.then(function (v) {
            setNome(v.data[0].nome);
            setAutor(v.data[0].autor);
            setIdioma(v.data[0].idioma);
            setEditora(v.data[0].editora);
            setData(parseData(v.data[0].data_publicacao));
            setUrl(v.data[0].url);
            setSinopse(v.data[0].sinopse);

        });

    }, []);
    
    function handleChange(e) {
        if (e.target.id === 'nome') setNome(e.target.value);
        else if (e.target.id === 'autor') setAutor(e.target.value);
        else if (e.target.id === 'idioma') setIdioma(e.target.value);
        else if (e.target.id === 'editora') setEditora(e.target.value);
        else if (e.target.id === 'data') setData(e.target.value);
        else if (e.target.id === 'url') setUrl(e.target.value);
        else if (e.target.id === 'sinopse') setSinopse(e.target.value);
    }

    function parseData(data) {
        var d = new Date(data);
        return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    }

    function handleSubmit(e) {
        e.preventDefault();
        var id = data.match.params.id;
       api.update({id, nome, autor, idioma, editora, data_publicacao, url, sinopse})
       .then(()=>{
           setRedirect(true);
       });
    }

    if(redirect) {
        return <Redirect to="/" />
      }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input value={data.match.params.id} id="id" type="text" className="validate" disabled/>
                        <label className="active" htmlFor="id">Id do Livro</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={nome} id="nome" type="text" className="validate"  onChange={handleChange}/>
                        <label className="active" htmlFor="nome">Nome do Livro</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input value={autor} id="autor" type="text" className="validate"  onChange={handleChange}/>
                        <label className="active" htmlFor="autor">Autor do Livro</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={idioma} id="idioma" type="text" className="validate" onChange={handleChange}/>
                        <label className="active" htmlFor="idioma">Idioma</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input value={editora} id="editora" type="text" className="validate" onChange={handleChange}/>
                        <label className="active" htmlFor="editora">Editora do Livro</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={data_publicacao} id="data" type="text" className="validate" onChange={handleChange}/>
                        <label className="active" htmlFor="data">Data da publicação</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input value={url} id="url" type="text" className="validate" onChange={handleChange}/>
                        <label className="active" htmlFor="url">URL</label>
                    </div>
                    <div className="input-field col s6">
                        <textarea value={sinopse} id="sinopse" className="materialize-textarea" onChange={handleChange}></textarea>
                        <label className="active" htmlFor="sinopse">Sinopse</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">
                    Editar
                <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    );
}

export default Edit;