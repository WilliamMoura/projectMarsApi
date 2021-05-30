const Produto = require('../models/produto');

module.exports = app => {
    app.get('/atendimentos', (req, res) => 
        
        res.send('Você está na       rota de atendimentos'),
        
    );

    app.post('/atendimentos', (req, res) => {
        const produto = req.body;

        Produto.adiciona(produto);
        res.send('Voce está fazendo um post')    
        
    });

}
