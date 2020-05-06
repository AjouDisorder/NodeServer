var db = require('../mongoCollections')

module.exports = {
    addMenuToWishList: function(req, res){
        return req.body
    },
    getWishList: function(req, res){
        return {"getWishList":"getWishList"}
    },
    deleteMenuInWishList: function (req, res) {
        return req.body
    }
}
