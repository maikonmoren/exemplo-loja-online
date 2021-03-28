import axios from 'axios';

const api = axios.create({
    baseURL: "https://api-maikonloja.herokuapp.com/roupa/",
})

export default api;