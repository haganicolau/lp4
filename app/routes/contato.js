module.exports = function (app) {
    var controller = app.controllers.contato;

    app.route('/contatos')
        .get(controller.findAll)
        .post(controller.create)
        .put(controller.update);


}