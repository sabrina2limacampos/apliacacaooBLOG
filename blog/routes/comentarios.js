module.exports = function(app) {
    var comentarios = app.controllers.comentarios;
    app.get('/comentarios', comentarios.index);
    app.get('/comentario/:id', comentarios.show);
    app.post('/comentario', comentarios.create);
    app.get('/comentario:id/editar', comentarios.edit);
    app.put('/comentario/:id', comentarios.update);
   
    app.delete('/comentario/:id', function (req, res) {
        res.send('Got a DELETE request at /user')
      });

    };