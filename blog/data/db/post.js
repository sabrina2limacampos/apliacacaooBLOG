/*module.exports = function(app) {
    var Schema = require('mongoose').Schema;

    var comentario = Schema({
      descricao: String
    , data: Date, default: Date.now
    });

    var post = Schema(
    {
    descricao: {type: String, required: true , index: {unique: true}}
    , data: {Date, default: Date.now}        
    }       
       
});*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Aqui vem a definição da esquema do 'Post':
/*var ComentarioSchema = new Schema({
    descricao: { type: String},
    data: {type: Date, default: Date.now},
    
  },
  {
    versionKey: false
}
);*/

var PostSchema = new Schema(
    {
        descricao: {type: String, required: true , index: {unique: true}},
        data: {type: Date, default: Date.now}  ,      
    },
    {
        versionKey: false
    }
);

//Aqui realizará a exportação do 'PostSchema' para usar em qualquer lugar:
module.exports = mongoose.model('post', PostSchema);