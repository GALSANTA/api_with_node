import axios from 'axios';


const index = async ( ) => {
    return await axios.get("http://localhost:3333");
}

const remove = async ( id ) => {
    console.log(id);
    return await axios.delete(`http://localhost:3333/excluir/${id}`);
}



export default {
    index,
    remove
}