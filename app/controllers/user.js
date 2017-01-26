module.exports = (app) => {
  
    var db = app.get('models');
    var UserCtrl = {};
    
    UserCtrl.getCategories = (req, res) => {
        db.Users
            .findAll()
            .then(categories => {
                res.json(categories)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    UserCtrl.createUser = (req, res) => {
        
        var user = req.body;
        
        console.log(user);
        
        db.Users
            .create(user)
            .then(user => {
                res.json(user)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    UserCtrl.updateUser = (req, res) => {
        
        var user = req.body;
        
        db.Users
            .update(user, {
                where: {id: user.id}
            }).then(user => {
                res.json(user)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };


        UserCtrl.verificaUser = (req, res) => {

             var email = req.params.email;
             var senha =req.params.senha;
        db.Users
            .findAll({
               where: {
                email: email,
                senha: senha
               }
            })
            .then(categories => {
                res.json(categories)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };


    
    UserCtrl.getUser = (req, res) => {
        
        var id = req.params.id;
        
        db.Users
            .findById(id)
            .then(user => {
                res.json(user)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    UserCtrl.deleteUser = (req, res) => {
        
        var id = req.params.id;
        
        db.Users
            .destroy({
                where: {id: id}
            }).then(user => {
                res.json(user)
            }).catch(error => {
               res.sendStatus(500).json(error) ;
            });
    };
    
    return UserCtrl;
    
};