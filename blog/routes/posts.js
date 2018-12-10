module.exports = function(app) {
    var posts = app.controllers.posts;
    app.get('/post', posts.index);
    app.get('/post/:id', posts.show);
    app.post('/post', posts.create);
    app.get('/post/:id/editar', posts.edit);
    app.put('/post/:id', posts.update);
       
    app.delete('/post/:id', function (req, res) {
        res.send('Got a DELETE request at /user')
      });

    };