const UserService = require('../services/UserService')

module.exports = {
  buscarTodos: async (req, res) => {
    let json = {error: '', result: []}

    let users = await UserService.buscarTodos()

    for(let i in users){
      json.result.push({
        id: users[i].id,
        name: users[i].name,
        city: users[i].city,
        address: users[i].address,
        email: users[i].email
      })
    }
    res.json(json)
  },

  buscarUm: async(req, res) => {
    let json = {error:'', result:{}}
    let id = req.params.id
    let user = await UserService.buscarUm(id)
    
    if(user){
      json.result = user
    }
    res.json(json)
  },

  inserir: async(req, res) => {
    let json = {error:'', result:{}}

    let name = req.body.name
    let city = req.body.city
    let address = req.body.address
    let email = req.body.email
    
    if(name && city && address && email){
      let userId = await UserService.inserir(name, city, address, email)
      json.result = {
        id: userId,
        name,
        city,
        address,
        email,
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
    let address = req.body.address
    let email = req.body.email
    
    if(id && name && city && address && email){
      await UserService.alterar(id, name, city, address, email)
      json.result = {
        id,
        name,
        city,
        address,
        email,
      }
    } else {
      json.error = "Campos não enviados"
    }
    res.json(json)
  },

  excluir: async(req, res) => {
    let json = {error:'', result:{}}

    await UserService.excluir(req.params.id)

    res.json(json)
  }
}