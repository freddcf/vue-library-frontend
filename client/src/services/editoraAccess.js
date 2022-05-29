import api from './api'

export default {

  buscarTodos: () => {
    return api.get('/editoras')
  },
  inserir: (editora) => {
    return api.post('/editoras', editora)
  },
  alterar: (id, editora) => {
    return api.put(`/editoras/${id}`, editora)
  },
  deletar: (id) => {
    return api.delete(`/editoras/${id}`)
  },

}