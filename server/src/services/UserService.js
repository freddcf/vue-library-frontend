const db = require('../db')

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM users", (error, results) => {
        if(error) {
          rejeitado(error);
          return;
        }
        aceito(results)
      })
    })
  },

  buscarUm: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (error, results) => {
        if(error) {
          rejeitado(error);
          return;
        }
        if(results.length > 0) {
          aceito(results[0])
        } else {
          aceito(false)
        }
      })
    })
  },

  inserir: (name, city, address, email) => {
    return new Promise((aceito, rejeitado) => {
      db.query("INSERT INTO users (name, city, address, email) VALUES (?, ?, ?, ?)", 
        [name, city, address, email], 
        (error, results) => {
          if(error) {
            rejeitado(error);
            return;
          }
          
          aceito(results.insertId);
        }
      )
    })
  },

  alterar: (id, name, city, address, email) => {
    return new Promise((aceito, rejeitado) => {
      db.query("UPDATE users SET name = ?, city = ?, address = ?, email = ? WHERE id = ?", 
        [name, city, address, email, id], 
        (error, results) => {
          if(error) {
            rejeitado(error);
            return;
          }
          
          aceito(results);
        }
      )
    })
  },

  excluir: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query("DELETE FROM users WHERE id = ?", [id], (error, results) => {
        if(error) {
          rejeitado(error);
          return;
        }
        aceito(results)
      })
    })
  },
}