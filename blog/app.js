// Setup
var express = require('express');
var load = require('consign');
var appExpress = express();

load('data\\db')
.then('controllers')
.then('routes')
.into(appExpress);

//Rotas
appExpress.set('views', __dirname + '/views');
appExpress.set('view engine', 'ejs');
appExpress.use(express.json());
//appExpress.use(express.urlencoded());
//appExpresspp.use(app.router);
appExpress.use(express.static(__dirname + '/public'));

/*app.use(express.cookieParser('node-blog'));
app.use(express.session());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));*/

//Funcionamneto com o middleware
var connect = require('connect');
var http = require('http');

var app = connect();

// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());

// store session state in browser cookie
var cookieSession = require('cookie-session');
app.use(cookieSession({
    keys: ['secret1', 'secret2']
}));

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// respond to all requests
app.use(function(req, res){
  res.end('Hello from Connect!\n');
});

//create node.js http server and listen on port
http.createServer(app).listen(3000);

//Banco de dados
/*var express = require('express')
, app = express()
, load = require('express-load')
, error = require('./middleware/error')
, server = require('http').createServer(app)
, io = require('socket.io').listen(server)*/
var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost/node-blog"', { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/node-blog", { useNewUrlParser: true });

/*var bodyParser = require('body-parser')
appExpress.use(bodyParser.json())
appExpress.use(bodyParser.urlencoded({ extended: true}))*/
appExpress.engine('html', require('ejs').renderFile);
appExpress.set('view engine', 'html');

var postSchema = new mongoose.Schema({ body: String });
var Post = mongoose.model('Post', postSchema);

// Routes
/*
app.get("/", (req, res) => {
   Post.find({}, (err, posts) => {
      res.render('index', { posts: posts})
   });
});
app.post('/addpost', (req, res) => {
    var postData = new Post(req.body);
    postData.save().then( result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});*/

    
// Listen
/*
appExpress.listen(3000, () => {
    console.log('Server listing on 3000');
})*/