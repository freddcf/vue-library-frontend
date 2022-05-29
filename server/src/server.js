const express = require('express')
const cors = require('cors')

const PORT = 21000
const routes = require('./routes')

const server = express()
server.use(cors())

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use('/api', routes)

server.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})