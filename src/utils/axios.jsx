import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const instanceProduct = axios.create({
    baseURL: 'http://localhost:3000/products/'
})

export default instance;