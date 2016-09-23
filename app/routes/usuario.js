
module.exports = function (app) {

    // módulo de controller que contém nossas regras de negócio.
    var controller = app.controllers.usuario;

    app.route('/v1/usuarios')
        .get(controller.findAll)
        .post(controller.create)
        .put(controller.update);

    app.route('/v1/usuarios/:id')
        .get(controller.findOne)
        .delete(controller.delete);


}
