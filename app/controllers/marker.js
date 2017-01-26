module.exports = (app) => {
  
    var db = app.get('models');
    var MarkersCtrl = {};


    MarkersCtrl.getCategories = (req, res) => {
        db.Markers
            .findAll()
            .then(categories => {
                res.json(categories)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    MarkersCtrl.createMarkers = (req, res) => {
        
        var Markers = req.body;
        
        console.log(Markers);
        
        db.Markers
            .create(Markers)
            .then(Markers => {
                res.json(Markers)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    MarkersCtrl.updateMarkers = (req, res) => {
        
        var Markers = req.body;
        
        db.Markers
            .update(Markers, {
                where: {id: Markers.id}
            }).then(Markers => {
                res.json(Markers)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    MarkersCtrl.getMarkers = (req, res) => {
        
        var id = req.params.id;
        
        db.Markers
            .findById(id)
            .then(Markers => {
                res.json(Markers)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    MarkersCtrl.deleteMarkers = (req, res) => {
        
        var id = req.params.id;
        
        db.Markers
            .destroy({
                where: {id: id}
            }).then(Markers => {
                res.json(Markers)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    return MarkersCtrl;
    
};