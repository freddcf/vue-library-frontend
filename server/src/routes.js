const express = require("express");
const router = express.Router();


// CRUD users
const UserController = require('./controllers/UserController')

router.get('/users', UserController.buscarTodos)
router.get('/users/:id', UserController.buscarUm)
router.post('/users', UserController.inserir)
router.put('/users/:id', UserController.alterar)
router.delete('/users/:id', UserController.excluir)



module.exports = router;