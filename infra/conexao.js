const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '$Hagaren4720',
    database: 'mars',
    insecureAuth: true
});

module.exports = conexao;