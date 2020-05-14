var db = require('../mongoCollections')
var OriginMenu_DB = db.collection_originMenu()
var Menu_DB = db.collection_menu()
var Restaurant_DB = db.collection_restaurant()


//메뉴 -> 기간이 종료되면, 가게 메뉴에서 pop해야함,,
module.exports = {
    getMenuList: function(req, res){
        Restaurant_DB.findById(req.query.restaurant_id, (err, restaurant)=>{
            Menu_DB.find({
                '_id': { $in: restaurant.menuidList }
            }, function(err, menuList){
                 res.json(menuList);
            });
        })
    },
    createMenu: function(req, res){
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
                    method : req.body.method
                })
                newMenu.save(function(err3, menu){
                    restaurant.menuidList.push(menu._id)
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
