const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b561093cb655a7',
  password: '8d13a31b',
  database: 'heroku_ee181f668ab5298',
})

// conn.connect((error) => {
//   if(error) throw error;
//   console.log(`Conexão estabelecida com o banco de dados`);
// })

module.exports = conn;