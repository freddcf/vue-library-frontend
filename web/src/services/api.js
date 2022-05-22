import axios from 'axios'

const api = axios.create({
  baseURL:'http://localhost:21000/api'
})

export default api