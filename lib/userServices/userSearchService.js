var db = require('../mongoCollections')

module.exports = {
    getMenuBySearchBar: function(req, res){
        return {"getMenuBySearchBar":"getMenuBySearchBar"}
    },
    getMenuByCategory: function (req, res) {
        return {"getMenuByCategory":"getMenuByCategory"}
    },
    getMenuByTime: function(req, res){
        return {"getMenuByTime":"getMenuByTime"}
    },
    getMenuDetail: function(req, res){
        return {"getMenuDetail":"getMenuDetail"}
    },
    getRestaurantBySearchBar: function(req, res){
        return {"getRestaurantBySearchBar":"getRestaurantBySearchBar"}
    },
    getRestaurantByCategory: function(req, res){
        return {"getRestaurantByCategory":"getRestaurantByCategory"}
    },
    getRestaurantDetail: function(req, res){
        return {"getRestaurantDetail":"getRestaurantDetail"}
    },
}
