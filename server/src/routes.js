const express = require("express");
const router = express.Router();


// CRUD users
const UserController = require('./controllers/UserController')
const EditoraController = require('./controllers/EditoraController')

router.get('/users', UserController.buscarTodos)
router.get('/users/:id', UserController.buscarUm)
router.post('/users', UserController.inserir)
router.put('/users/:id', UserController.alterar)
router.delete('/users/:id', UserController.excluir)

router.get('/editoras', EditoraController.buscarTodos)
router.get('/editoras/:id', EditoraController.buscarUm)
router.post('/editoras', EditoraController.inserir)
router.put('/editoras/:id', EditoraController.alterar)
router.delete('/editoras/:id', EditoraController.excluir)



module.exports = router;