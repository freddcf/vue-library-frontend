const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express()
server.use(cors({
  origin: '*'
}))

server.use(bodyParser.urlencoded({extended: false}));
server.use(express.json());

server.use('/api', routes)

server.listen(process.env.PORT || 21000, () => {
  console.log(`Server running`);
})