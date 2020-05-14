// iniciando o servidor
const express    = require('express');
const exp_hdl    = require("express-handlebars"); // instalando o handlebars
const app        = express();
const path       = require("path"); // instalando o handlebars
const PORT       = 3000;
const bodyParser = require('body-parser');
// conexão com o banco de dados
const db         = require('./db/connection'); 

// abre a pota do servidor
app.listen(PORT, function(){
    console.log(`O express está funcionando na porta ${PORT}`);
});

// utilizar o body-parser
app.use(bodyParser.urlencoded({extended : false}));


// handlebars // instalando o handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exp_hdl({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));



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
    resposta.render("index"); // rederiza a pag pelo servidor
});

// rotas do job
app.use('/jobs', require('./routes/rotesJob'));
