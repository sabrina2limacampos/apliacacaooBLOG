// Setup
var express = require('express');
var app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", (req, res) => {
    res.render('index');
 });


//Banco de dados
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/node-blog", { useNewUrlParser: true })

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

var postSchema = new mongoose.Schema({ body: String });
var Post = mongoose.model('Post', postSchema);

// Routes
/*
app.get("/", (req, res) => {
   res.render('index');
});
*/
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
});



//Para o index
/*
app.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
       res.render('index', { posts: posts})
    });
 });*/