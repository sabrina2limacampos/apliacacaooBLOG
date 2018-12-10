module.exports = function(app) {
    var Schema = require('mongoose').Schema;
    
    var teste = Schema({
    nome: {type: String, required: true}
    
    });
    return db.model('testes', teste);
    };