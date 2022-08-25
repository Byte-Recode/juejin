import axios from 'axios'


const request = axios.create({
    baseURL: 'http://localhost:80/'
})

export default request