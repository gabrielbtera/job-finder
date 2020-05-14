const express = require('express');
const router  = express.Router();
const job     = require('../models/job');

// teste
router.get('/test', (req, res) => {
    res.send("Deu certo");
});

// adicionando job via post
router.post('/add', (req, res)=> {
    let {titulo, descricao, salario, empresa, email, trab_novo } = req.body;
    
    // inserir dados no sistema
    job.create( {
        titulo,
        descricao,
        salario,
        empresa,
        email,
        trab_novo
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});


module.exports = router;
