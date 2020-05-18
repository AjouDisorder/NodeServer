var db = require('../mongoCollections')

//메뉴종료되면, 메뉴리스트에서 pop
module.exports = {
    addMenuToWishList: function(req, res){
        return req.body
    },
    getWishList: function(req, res){
        //메뉴 아이디를 찾고, _id값이 존재하는 것들만 출력
        return {"getWishList":"getWishList"}
    },
    deleteMenuInWishList: function (req, res) {
        return req.body
    }
}
