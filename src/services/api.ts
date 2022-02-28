import axios from'axios'


const api = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 1000
})

export default api