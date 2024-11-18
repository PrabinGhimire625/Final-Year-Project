import axios from "axios"
//use axios and make instance and call whenever needed
const API=axios.create({
    baseURL:'http://localhost:3000/',
    headers:{
        'Content-Type': 'application/json', //data send to the json format in the backend
        'Accept':'application/json',  //data came from the backend in the format
    }
})

console.log(localStorage.getItem('token'))

//use this api if the token is needed
const APIAuthenticated = axios.create({
    baseURL : 'http://localhost:3000/',
    headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `${localStorage.getItem('token')}`  //for the token
    }
})


export {API, APIAuthenticated}