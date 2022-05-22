import api from './api'

export default {
  buscarTodos: () => {
    return api.get('/users')
  },
  inserir: (usuario) => {
    return api.post('/users', usuario)
  }
}