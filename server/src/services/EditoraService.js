const db = require('../db')

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM editoras", (error, results) => {
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
      db.query("SELECT * FROM editoras WHERE id = ?", [id], (error, results) => {
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

  inserir: (name, city) => {
    return new Promise((aceito, rejeitado) => {
      db.query("SET auto_increment_increment = 1")
      db.query("INSERT INTO editoras (name, city) VALUES (?, ?)", 
        [name, city], 
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

  alterar: (id, name, city) => {
    return new Promise((aceito, rejeitado) => {
      db.query("UPDATE editoras SET name = ?, city = ? WHERE id = ?", 
        [name, city, id], 
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
      db.query("DELETE FROM editoras WHERE id = ?", [id], (error, results) => {
        if(error) {
          rejeitado(error);
          return;
        }
        aceito(results)
      })
    })
  },
}