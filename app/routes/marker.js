module.exports = (app) => {
    
    var ctrl = app.controllers.marker;
    
    app.route('/api/markers')
        .get(ctrl.getCategories)
        .post(ctrl.createMarkers)
        .put(ctrl.updateMarkers);
    
    app.route('/api/markers/:id')
        .get(ctrl.getMarkers)
        .delete(ctrl.deleteMarkers);
    
};