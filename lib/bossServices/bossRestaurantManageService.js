var db = require('../mongoCollections')
var Restaurant_DB = db.collection_restaurant()
var Boss_DB = db.collection_boss()

module.exports = {
    getRestaurantList: function(req, res){
        //boss_id로 restaurantidList를 조회
        Boss_DB.findById(req.query.boss_id, function(err, boss){
            if (err) res.send(err)
            res.json(boss.restaurantidList)
        })
    },
    getRestaurantByIndex: function(req, res){
        //restaurantidList의 인덱스 값으로 restaurant를 조회
        Boss_DB.findById(req.query.boss_id, function(err, boss){
            if (err) res.send(err)
            Restaurant_DB.findById(boss.restaurantidList[req.query.index], function(err2, restaurant){
                if (err2) res.send(err2)
                res.json(restaurant)
            })
        })
    },
    createRestaurant: function (req, res) {
        var newRestaurant = new Restaurant_DB({
            title: req.body.title, type: req.body.type,
            description: req.body.description, 
            address: req.body.address,
            //req.body.lat과 req.body.lng를 필수로 넣어줘야함
            location : {
                coordinates : [req.body.lat, req.body.lng]
            },
            phone: req.body.phone,
            picture: req.body.picture,  //createPicture로 !
            originMenuList: [],
            menuidList: [], paidTicketidList: [],
            certifiedTicketidList: [], reviewidList: [],
            favoriteUseridList: [],
        });
        newRestaurant.save(function(err2, restaurant){
            if (err2) res.send(err2)
            Boss_DB.findById(req.body.boss_id, function(err3, boss){
                if (err3) res.send(err3)
                boss.restaurantidList.push(restaurant._id)
                boss.save(function(err4, updatedBoss){
                    if (err4) res.send(err4)
                    res.json(restaurant)
                })
            })
        })
    },
    updateRestaurant: function(req, res){
        Restaurant_DB.findById(req.body.restaurant_id, (err, restaurant)=>{
            restaurant.title = req.body.title
            restaurant.type = req.body.type
            restaurant.description = req.body.description
            restaurant.address = req.body.address
            //req.body.lat과 req.body.lng를 필수로 넣어줘야함
            restaurant.location = { coordinates : [req.body.lat, req.body.lng] }
            restaurant.phone = req.body.phone
            restaurant.picture = req.body.picture
            restaurant.save((err2, updatedRestaurant)=>{
                res.json(updatedRestaurant)
            })
        })
    },
    deleteRestaurant: function (req, res) {
        /*
            0. 조건 : 가게의 paid티켓List에 아무것도 없어야함
            1. 가게의 originMenuList, 메뉴List, 리뷰List에 각 db삭제
            2. 가게의즐찾userList들을 찾아서 -> user의 즐찾 list에서 가게 삭제
            3. 사장님의 가게 id리스트에서도 pop
            4. 실제 가게 db에서 삭제되진 않아야 할지..토의 필요
        */
    }
}
