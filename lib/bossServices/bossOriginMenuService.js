var db = require('../mongoCollections')

module.exports = {
    createOriginMenu: function(req, res){
        return req.body
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
