const express = require('express');
const router  = express.Router();
const job     = require('../models/job');

// teste
router.get('/test', (req, res) => {
    res.send("Deu certo");
});


router.get('/add', (req, res) => {
    res.render('add');
});


router.get('/view:id',(req, res) => job.findOne({
    where: {id : req.params.id},

    })
    .then(job => {
        res.render('view', {
            job
        });
    }).catch(err => console.log(err))
);


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


