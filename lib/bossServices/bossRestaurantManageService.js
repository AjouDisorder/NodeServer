var db = require('../mongoCollections')

module.exports = {
    getRestaurantList: function(req, res){
        return {"getRestaurantList":"getRestaurantList"}
    },
    createRestaurant: function (req, res) {
        return req.body
    },
    updateRestaurant: function(req, res){
        return req.body
    },
    deleteRestaurant: function (req, res) {
        return req.body
    }
}
