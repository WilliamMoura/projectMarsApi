class Tabelas {
    init(conexao) {
        this.conexao = conexao;;
        this.criarProdutos()
    }
    criarProdutos() {
        const sql =  'CREATE TABLE IF NOT EXISTS produtos (id int primary key auto_increment, nome varchar(100), descricao text)';

        this.conexao.query(sql, erro => {
            if (!erro) {
                return erro;
            }

        });

    }
}

module.exports = new Tabelas;