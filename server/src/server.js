require('dotenv').config({path:'variaveis.env'})

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express()
server.use(cors())

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use('/api', routes)

server.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
})