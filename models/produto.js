const conexao = require('../infra/conexao');

class Produto {
    adiciona(produto) {
        const sql = "INSERT INTO produtos SET ?";

        conexao.query(sql, produto, (erro, resultados) => {
            if (!erro) {
                console.log(resultados);
            }
        })
    }
}

module.exports = new Produto;