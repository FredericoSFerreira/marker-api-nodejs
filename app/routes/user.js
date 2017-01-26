module.exports = (app) => {
    
    var ctrl = app.controllers.user;
    
    app.route('/api/user')
        .get(ctrl.getCategories)
        .post(ctrl.createUser)
        .put(ctrl.updateUser);
    
    app.route('/api/user/:id')
        .get(ctrl.getUser)
        .delete(ctrl.deleteUser);

            app.route('/api/user/:email/:senha')
        .get(ctrl.verificaUser)
    
};