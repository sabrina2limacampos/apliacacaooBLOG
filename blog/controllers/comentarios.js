module.exports = function(app) {
            

    var ComentarioController = {
        index: function(req, res) {
            var post = req.post[id]
            , contatos = post.comentarios
            , params = {post: post
            , comentarios: comentarios};
            res.render('comentarios/index', params);
        },  
            
        create: function(req, res) {
                var comentario = req.body.comentario
                , post = req.post=[id];
                post.comentarios.push(comentario);
                res.redirect('/comentarios');
        },
    
        show: function(req, res) {
                var id = req.params.id
                , comentario = req.post[id].comentarios[id]
                , params = {comentario: comentario, id: id};
                res.render('comentarios/show', params);
        },
            
        edit: function(req, res) {
                var id = req.params.id
                , comentario = req.post[id]
                , comentario = post.comentarios[id]
                , params = {usuario: usuario
                , comentario: comentario
                , id: id};
                res.render('comentarios/edit', params);
        },

        update: function(req, res) {
            var comentario = req.body.comentario
            , post = req.post[id];
            post.comentarios[req.params.id] = comentario;
            res.redirect('/comentarios');
         },

        

        

    }
    return ComentarioController;

    
};