import axios from 'axios'

const api = axios.create({
  baseURL:'https://wda-library-db.herokuapp.com/api'
})

export default api