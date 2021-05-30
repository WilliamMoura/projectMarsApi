const custonExpress = require('./config/custonExpress');
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/tabelas');


const app = custonExpress();

conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    }
    Tabelas.init(conexao);
});

app.listen(3000, function() {
    console.log('hahaha servidor rodando');
});


app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'));