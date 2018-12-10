module.exports = function(app) {
    var home = app.controllers.home;
    app.get('/', home.index);
    };

module.exports = function(app) {
        var HomeController = {
        index: function(req, res) {
        res.render('home/index');
        }
        };
        return HomeController;
        };

module.exports = function(app) {
            var comentarios = app.controllers.comentarios;
            app.get('/comentarios', comentarios.index);
        };