module.exports = function(app){
  var controller = app.controllers.livro;

  app.route('/livros')
    .post(controller.create)
    .get(controller.findAll)
    .put(controller.update);

  app.route("/livros/:id")
    .get(controller.findOne)
    .delete(controller.delete);

}
