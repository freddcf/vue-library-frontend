const LivrosService = require('../services/LivrosService')

module.exports = {
  buscarTodos: async (req, res) => {
    let json = {error: '', result: []}

    let livros = await LivrosService.buscarTodos()

    for(let i in livros){
      json.result.push({
        id: livros[i].id,
        name: livros[i].name,
        author: livros[i].author,
        editora: livros[i].editora,
        lancamento: livros[i].lancamento,
        quantidade: livros[i].quantidade
      })
    }
    res.json(json)
  },

  buscarUm: async(req, res) => {
    let json = {error:'', result:{}}
    let id = req.params.id
    let editora = await LivrosService.buscarUm(id)
    
    if(editora){
      json.result = editora
    }
    res.json(json)
  },

  inserir: async(req, res) => {
    let json = {error:'', result:{}}

    let name = req.body.name
    let author = req.body.author
    let editora = req.body.editora
    let lancamento = req.body.lancamento
    let quantidade = req.body.quantidade
    
    if(name && author && editora && lancamento && quantidade){
      let editoraId = await LivrosService.inserir(name, author, editora, lancamento, quantidade)
      json.result = {
        id: editoraId,
        name,
        author,
        editora,
        lancamento,
        quantidade,
      }
    } else {
      json.error = "Campos não enviados"
    }
    res.json(json)
  },

  alterar: async(req, res) => {
    let json = {error:'', result:{}}

    let id = req.params.id
    let name = req.body.name
    let author = req.body.author
    let editora = req.body.editora
    let lancamento = req.body.lancamento
    let quantidade = req.body.quantidade
    
    if(id && name && author && editora && lancamento && quantidade){
      await LivrosService.alterar(id, name, author, editora, lancamento, quantidade)
      json.result = {
        id,
        name,
        author,
        editora,
        lancamento,
        quantidade,
      }
    } else {
      json.error = "Campos não enviados"
    }
    res.json(json)
  },

  excluir: async(req, res) => {
    let json = {error:'', result:{}}

    await LivrosService.excluir(req.params.id)

    res.json(json)
  }
}