module.exports = function(app) {
            

    var PostController = {
        index: function(req, res) {
            var post = req.post[id]
            , contatos = post
            , params = {post: post
            , posts: posts};
            res.render('posts/index', params);
        },  
            
        create: function(req, res) {
                var post = req.body.post
                , post = req.post=[id];
                post.push(post);
                res.redirect('/posts');
        },
    
        show: function(req, res) {
                var id = req.params.id
                , comentario = req.post[id]
                , params = {post: post, id: id};
                res.render('posts/show', params);
        },
            
        edit: function(req, res) {
                var id = req.params.id
                , comentario = req.post[id]                
                , params = {post: post
                , post: post
                , id: id};
                res.render('posts/edit', params);
        },

        update: function(req, res) {
            var post = req.body.post
            , post = req.post[id];
            post[req.params.id] = post;
            res.redirect('/posts');
        },

        

        

    }
    return PostController;

    
};