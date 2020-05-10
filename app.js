// iniciando o servidor
const express = require('express');
const app = express();
const PORT = 3000;

// conexão com o banco de dados
const db = require('./db/connection'); 


// abre a pota do servidor
app.listen(PORT, function(){
    console.log(`O express está funcionando na porta ${PORT}`);
});

// conexão com o banco de dados
db
    .authenticate()
    .then(() => {
        console.log("conexão com o banco realizada com sucesso");
    })
    .catch(err => {
        console.log("Erro na conexão com o banco de dados", err);
    });


// criação de rota
app.get('/', function(requisicao, resposta) {
    resposta.send("Tudo ok 1123");
});
