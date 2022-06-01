const db = require('../db')

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM livros", (error, results) => {
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
      db.query("SELECT * FROM livros WHERE id = ?", [id], (error, results) => {
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

  inserir: (name, author, editora, lancamento, quantidade) => {
    return new Promise((aceito, rejeitado) => {
      db.query("SET auto_increment_increment = 1")
      db.query("INSERT INTO livros (name, author, editora, lancamento, quantidade) VALUES (?, ?, ?, ?, ?)", 
        [name, author, editora, lancamento, quantidade], 
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

  alterar: (id, name, author, editora, lancamento, quantidade) => {
    return new Promise((aceito, rejeitado) => {
      db.query("UPDATE livros SET name = ?, author = ?, editora = ?, lancamento = ?, quantidade = ? WHERE id = ?", 
        [name, author, editora, lancamento, quantidade, id], 
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
      db.query("DELETE FROM livros WHERE id = ?", [id], (error, results) => {
        if(error) {
          rejeitado(error);
          return;
        }
        aceito(results)
      })
    })
  },
}