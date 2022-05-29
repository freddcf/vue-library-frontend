const EditoraService = require('../services/EditoraService')

module.exports = {
  buscarTodos: async (req, res) => {
    let json = {error: '', result: []}

    let editoras = await EditoraService.buscarTodos()

    for(let i in editoras){
      json.result.push({
        id: editoras[i].id,
        name: editoras[i].name,
        city: editoras[i].city,
      })
    }
    res.json(json)
  },

  buscarUm: async(req, res) => {
    let json = {error:'', result:{}}
    let id = req.params.id
    let editora = await EditoraService.buscarUm(id)
    
    if(editora){
      json.result = editora
    }
    res.json(json)
  },

  inserir: async(req, res) => {
    let json = {error:'', result:{}}

    let name = req.body.name
    let city = req.body.city
    
    if(name && city){
      let editoraId = await EditoraService.inserir(name, city)
      json.result = {
        id: editoraId,
        name,
        city,
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
    let city = req.body.city
    
    if(id && name && city){
      await EditoraService.alterar(id, name, city)
      json.result = {
        id,
        name,
        city,
      }
    } else {
      json.error = "Campos não enviados"
    }
    res.json(json)
  },

  excluir: async(req, res) => {
    let json = {error:'', result:{}}

    await EditoraService.excluir(req.params.id)

    res.json(json)
  }
}