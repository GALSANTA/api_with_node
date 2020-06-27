import axios from 'axios';


const index = async ( ) => {
    return await axios.get("http://localhost:3333");
}

const remove = async ( id ) => {
    return await axios.delete(`http://localhost:3333/excluir/${id}`);
}

const getLivro = async ( id ) => {
    return await axios.get(`http://localhost:3333/edit/${id}`);
}

const update = ( id, product ) => {
    return axios.put(`http://localhost:3333/edit/${id}`, product);
}

export default {
    index,
    remove,
    getLivro,
    update
}