var db = require('../mongoCollections')
var OriginMenu_DB = db.collection_originMenu()
var Menu_DB = db.collection_menu()
var Restaurant_DB = db.collection_restaurant()

var schedule = require('node-schedule');

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
                    title : originMenu.title,
                    type : originMenu.type,
                    location : restaurant.location,
                    address : restaurant.address,
                    picture : req.body.picture,
                    discount : req.body.discount,
                    quantity : req.body.quantity,
                    start_month : req.body.start_month,
                    start_date : req.body.start_date,
                    start_hour : req.body.start_hour,
                    start_min : req.body.start_min,
                    end_month : req.body.end_month,
                    end_date : req.body.end_date,
                    end_hour : req.body.end_hour,
                    end_min : req.body.end_min,
                    method : req.body.method
                })
                newMenu.save(function(err3, menu){
                    restaurant.menuidList.push(menu._id)
                    restaurant.save(function(err4, updatedRestaurant){
                        //menu start : 메뉴.alive true
                        var aliveJob = schedule.scheduleJob(
                            `* ${req.body.start_min} ${req.body.start_hour} 
                            ${req.body.start_date} ${req.body.start_month} *`, ()=>{
                            menu.alive = true
                            menu.save(()=>{
                                aliveJob.cancel()
                            })
                        });   
                        
                        //menu end : 메뉴 삭제 / 가게 메뉴id리스트 pop
                        var destroyJob = schedule.scheduleJob(
                            `* ${req.body.end_min} ${req.body.end_hour} 
                            ${req.body.end_date} ${req.body.end_month} *`, ()=>{
                                var idx = updatedRestaurant.menuidList.findIndex(function(item) {
                                    return item == String(menu._id)})
                                if (idx > -1) updatedRestaurant.menuidList.splice(idx, 1)
                                updatedRestaurant.save(()=>{
                                    Menu_DB.deleteOne({_id: menu._id}, ()=>{
                                        destroyJob.cancel()
                                    })
                                })
                        });   

                        res.json(menu)
                    })
                })
            })
        })
    },
    updateMenu: function(req, res){
        Menu_DB.findById(req.body.menu_id, (err, menu)=>{
            menu.picture = req.body.picture,
            menu.discount = req.body.discount,
            menu.quantity = req.body.quantity,
            menu.start_month = req.body.start_month,
            menu.start_date = req.body.start_date,
            menu.start_hour = req.body.start_hour,
            menu.start_min = req.body.start_min,
            menu.end_month = req.body.end_month,
            menu.end_date = req.body.end_date,
            menu.end_hour = req.body.end_hour,
            menu.end_min = req.body.end_min,
            menu.method = req.body.method
            menu.alive = false
            menu.save((err2, updatedMenu)=>{
                Restaurant_DB.findById(updatedMenu.originMenu.restaurant_id, (err3, restaurant)=>{
                    //menu start : 메뉴.alive true
                    var aliveJob = schedule.scheduleJob(
                        `* ${req.body.start_min} ${req.body.start_hour} 
                        ${req.body.start_date} ${req.body.start_month} *`, ()=>{
                        updatedMenu.alive = true
                        updatedMenu.save(()=>{
                            aliveJob.cancel()
                        })
                    });   
                    
                    //menu end : 메뉴 삭제 / 가게 메뉴id리스트 pop
                    var destroyJob = schedule.scheduleJob(
                        `* ${req.body.end_min} ${req.body.end_hour} 
                        ${req.body.end_date} ${req.body.end_month} *`, ()=>{
                            var idx = restaurant.menuidList.findIndex(function(item) {
                                return item == String(updatedMenu._id)})
                            if (idx > -1) restaurant.menuidList.splice(idx, 1)
                            restaurant.save(()=>{
                                Menu_DB.deleteOne({_id: updatedMenu._id}, ()=>{
                                    destroyJob.cancel()
                                })
                            })
                    });  

                    res.json(menu) 
                })
            })
        })
    },
    deleteMenu: function (req, res) {
        Menu_DB.findById(req.body.menu_id, (err, menu)=>{
            Restaurant_DB.findById(menu.originMenu.restaurant_id, (err2, restaurant)=>{
                var idx = restaurant.menuidList.findIndex(function(item) {
                    return item == String(menu._id)})
                if (idx > -1) restaurant.menuidList.splice(idx, 1)
                restaurant.save(()=>{
                    Menu_DB.deleteOne({_id: menu._id}, ()=>{
                        res.json(restaurant.menuidList)
                    })
                })
            })
        })
    }
}
