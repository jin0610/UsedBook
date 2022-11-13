import axios from "axios"

const Api = axios.create({
    baseURL: 'http://118.67.142.53:8080',
    headers:{
        "Content-Type":"application/json; charset=UTF-8",
    
    },
})


export default Api