var db = require('../mongoCollections')
var OriginMenu_DB = db.collection_originMenu()
var Menu_DB = db.collection_menu()
var Restaurant_DB = db.collection_restaurant()

module.exports = {
    createMenu: function(req, res){
        //FE : 기존메뉴 id(메뉴의 기존메뉴, 사진), 식당id(메뉴의 address에), -> 메뉴에추가
        OriginMenu_DB.findById(req.body.originMenu_id, function(err, originMenu){
            Restaurant_DB.findById(originMenu.restaurant_id, function(err2, restaurant){
                var newMenu = new Menu_DB({
                    originMenu : originMenu,
                    address : restaurant.address,
                    picture : req.body.picture,
                    discount : req.body.discount,
                    quantity : req.body.quantity,
                    start_hour : req.body.start_hour,
                    start_min : req.body.start_min,
                    end_hour : req.body.end_hour,
                    end_min : req.body.end_min,
                    method : originMenu.type
                })
                newMenu.save(function(err3, menu){
                    restaurant.menuList.push(menu)
                    restaurant.save(function(err4, updatedRestaurant){
                        res.json(menu)
                    })
                })
            })
        })
    },
    updateMenu: function(req, res){
        return req.body
    },
    deleteMenu: function (req, res) {
        return req.body
    }
}
