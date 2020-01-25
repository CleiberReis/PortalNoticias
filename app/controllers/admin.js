module.exports.formulario_inclusao_noticia = function(application, req, res) {
  res.render('admin/form_add_noticia', { validacao: {} , noticia: {} });
}

module.exports.noticias_salvar = function(application, req, res){
  var noticia = req.body;

    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('noticia','Notícia é obrigatória').notEmpty();
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data da notícia é obrigatória').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 a 100 caracteres').len(10, 100);

    var errors = req.validationErrors();

    if(errors){
      return res.render('admin/form_add_noticia', { validacao: errors, noticia: noticia });
    }

    var connection = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

    NoticiasDAO.salvarNoticia(noticia, function (error, result) {
      res.redirect('/noticias');
    });
}