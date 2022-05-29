import api from './api'

export default {

  buscarTodos: () => {
    return api.get('/users')
  },
  inserir: (usuario) => {
    return api.post('/users', usuario)
  },
  alterar: (id, usuario) => {
    return api.put(`/users/${id}`, usuario)
  },
  deletar: (id) => {
    return api.delete(`/users/${id}`)
  },

}