var db = require('../mongoCollections')
var OriginMenu_DB = db.collection_originMenu()
var Restaurant_DB = db.collection_restaurant()

module.exports = {
    createOriginMenu: function(req, res){
        var newOriginMenu = new OriginMenu_DB({
            restaurant_id : req.body.restaurant_id,
            title: req.body.title, type: req.body.type,
            description: req.body.description, 
            price: req.body.price,
            picture: req.body.picture   //createPicture를 통해 받은 json을 여기에
        });
        newOriginMenu.save(function(err, originMenu){
            if (err) res.send(err)
            Restaurant_DB.findById(originMenu.restaurant_id, function(err2, restaurant){
                if (err2) res.send(err2)
                restaurant.originMenuList.push(originMenu)
                restaurant.save(function(err3, updatedRestaurant){
                    if (err3) res.send(err3)
                    res.json(originMenu)
                })
            })
        })
    },
    updateOriginMenu: function (req, res) {
        return req.body
    },
    deleteOriginMenu: function(req, res){
        return req.body
    },
    getOriginMenuList: function (req, res) {
        return {"getOriginMenuList":"getOriginMenuList"}
    }
}
