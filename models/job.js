const Sequelize = require("sequelize");
const db = require('../db/connection');

const job = db.define('jobs',{
    titulo: {
        type: Sequelize.STRING,
    },
    descricao : {
        type: Sequelize.STRING,
    },
    salario : {
        type : Sequelize.STRING,
    },
    empresa : {
        type : Sequelize.STRING,
    },
    email : {
        type : Sequelize.STRING,   
    },
    trab_novo : {
        type : Sequelize.INTEGER,
    }
});

module.exports = job;

