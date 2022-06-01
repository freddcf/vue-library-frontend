const express = require("express");
const router = express.Router();


// CRUD users
const UserController = require('./controllers/UserController')
const EditoraController = require('./controllers/EditoraController')
const LivrosController = require('./controllers/LivrosController')

// CRUD usuários
router.get('/users', UserController.buscarTodos)
router.get('/users/:id', UserController.buscarUm)
router.post('/users', UserController.inserir)
router.put('/users/:id', UserController.alterar)
router.delete('/users/:id', UserController.excluir)

// CRUD editoras
router.get('/editoras', EditoraController.buscarTodos)
router.get('/editoras/:id', EditoraController.buscarUm)
router.post('/editoras', EditoraController.inserir)
router.put('/editoras/:id', EditoraController.alterar)
router.delete('/editoras/:id', EditoraController.excluir)

// CRUD livros
router.get('/livros', LivrosController.buscarTodos)
router.get('/livros/:id', LivrosController.buscarUm)
router.post('/livros', LivrosController.inserir)
router.put('/livros/:id', LivrosController.alterar)
router.delete('/livros/:id', LivrosController.excluir)



module.exports = router;