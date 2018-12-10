/*module.exports = function(app) {
    var posts = app.controllers.posts;
    app.get('/post', posts.index);
    app.get('/post/:id', posts.show);
    app.post('/post', posts.create);
    app.get('/post/:id/editar', posts.edit);
    app.put('/post/:id', posts.update);
       
    app.delete('/post/:id', function (req, res) {
        res.send('Got a DELETE request at /user')
      });

};*/

    var mongoose = require('mongoose');
    var Post = require('../data/db/post');
    
    /* 1) Método: Selecionar Posts (acessar em: GET http://localhost:3000/post */
        function selecionarTodosPosts(req, res) {
    
            //Aqui estamos definindo a query do banco para que possa retornar todos os posts:
            var query = Post.find({});
            query.exec(function(error, posts) {
                if(error)
                    res.send(error);
                //Caso não haja erros, então retornará para o usuário:
                res.json(posts);
            });       
        }
    
    /* 2) Método: Criar Post (acessar em: POST http://localhost:3000/post) */
        function adicionarPost(req, res) {
    
            //Criamos um novo post:
            var novoPost = new Post(req.body);
    
            //Aqui estaremos salvando todos os campos na base de dados:
            novoPost.save(function(error, post) {
                if(error) {
                    res.send(error);
                } else {
                    res.json({ message: "Post adicionado com Sucesso!", post });
                }
            });
        }
    
    /** 3)  Método: Selecionar Por Id (acessar em: GET http://localhost:3000/post/:id ) */ 
        function selecionarPostPorId(req, res) {
            Post.findById(req.params.id, function(error, post) {
                if(error)
                    res.send(error);
    
                    //Caso não haja erros, retornar para o usuário:
                    res.json(post);
            });
        }
    
    /** 4) Método: Excluir (acessar em: http://localhost:3000/post/:id ) */ 
        function excluirPost(req, res) {
            Post.remove({ _id: req.params.id }, function(error, resultado) {
                res.json({ message: "Post excluído com Sucesso!", resultado });
            });
        }
    /* 5) Método: Atualizar (acessar em: PUT http://localhost:3000/post/:id ) */
        function atualizarPost(req, res) {
            //Para que eu possa atualizar um post, preciso primeiramente encontrar o id do post que desejo atualizar:
            Post.findById({ _id: req.params.id }, function(error, post) {
                if(error)
                    res.send(error);
                
                //Caso não haja erros, retornar a atualização para o usuário:
                Object.assign(post, req.body).save(function(error, post) {
                    if(error)
                        res.send(error);
                    res.json({ message: "Post Atualizado com Sucesso", post });
                });
            });
        }
    
    //Aqui iremos exportar todas as funções criadas acima:
    module.exports = { selecionarTodosPosts, adicionarPost, selecionarPostPorId, excluirPost, atualizarPost };