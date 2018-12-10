var express = require('express');
var load = require('consign');
var appExpress = express();
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = 3000;
//var post = require('./routes/post');
//var config = require('config'); // aqui estaremos carregando a localização da base de dados através dos arquivos JSON.

load('data\\db')
.then('controllers')
.then('routes')
.then('config')
.into(app);

//Opção das base de dados:
var options = { 
                server:{ socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 }}, 
                replset:{ socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 }} 
              };

//Conexão com a base de dados:
global.db = mongoose.connect('mongodb://localhost/node-blog"', { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/node-blog", { useNewUrlParser: true });

//mongoose.connect(app.DBHost, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar com a Base de Dados....: '));

 
//Essa parte do código estaremos mostrando os logs quando acontecer os testes:
/*if(app.util.getEnv('NODE_ENV') !== 'test') {

    //Aqui estamos usando 'morgan'. Ele é responsável por realizar as requisições de logger no middleware para Node.Js
    app.use(morgan('combined')); 
}*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get("/", (req, res) => res.json({message: "Sejam Bem-Vindos !"}));

//Definição das rotas para: GET & POST:
/*app.route("/post")
	.get(app.selecionarTodosPosts)
	.post(app.adicionarPost);*/

//Definição das rotas para: GET, DELETE & PUT
/*app.route("/post/:id")
	.get(app.selecionarPostPorId)
	.delete(app.excluirPost)
    .put(app.atualizarPost);*/

    app.route('/post')
    .get(function(req, res) {
        app.post.selecionarTodosPosts
	    app.post.adicionarPost;
        //res.send('GET POST');
    })

    app.route('/post/:id')
    .get(function(req, res) {
        app.post.get(app.selecionarPostPorId)
        app.post.delete(app.excluirPost)
        app.post.put(app.atualizarPost);
        //res.send('GET POST');
    });
    
     
app.listen(port);
console.log("Aplicação executando na porta " + port);

module.exports = app;