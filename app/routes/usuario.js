
module.exports = function (app) {

    // módulo de controller que contém nossas regras de negócio.
    var controller = app.controllers.usuario;

    app.route('/usuarios')
        .get(controller.findAll)
        .post(controller.create)
        .put(controller.update);

    app.route('/usuarios/:id')
        .get(controller.findOne)
        .delete(controller.delete);


}
