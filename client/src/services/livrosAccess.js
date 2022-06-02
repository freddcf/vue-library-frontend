import api from './api'

export default {

  buscarTodos: () => {
    return api.get('/livros')
  },
  inserir: (livro) => {
    return api.post('/livros', livro)
  },
  alterar: (id, livro) => {
    return api.put(`/livros/${id}`, livro)
  },
  deletar: (id) => {
    return api.delete(`/livros/${id}`)
  },

}