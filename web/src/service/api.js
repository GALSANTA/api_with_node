import axios from 'axios';


const index = async ( ) => {
    return await axios.get("http://localhost:3333");
}



export default {
    index
}