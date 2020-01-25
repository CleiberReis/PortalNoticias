module.exports.noticias = function(application, req, res){
  var connection = application.config.dbConnection();
  var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

  NoticiasDAO.getNoticias(function (error, result) {
    res.render('noticias/noticias', { noticias: result });
  });
}

module.exports.noticia = function(application, req, res){
  var connection = application.config.dbConnection();
  var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

  var id_noticia = req.query;

  NoticiasDAO.getNoticia(id_noticia, function (error, result) {
    res.render('noticias/noticia', { noticia: result });
  });
}