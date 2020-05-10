var db = require('../mongoCollections')

var Address_DB = db.collection_address()
var Restaurant_DB = db.collection_restaurant()
var Boss_DB = db.collection_boss()

module.exports = {
    getRestaurantList: function(req, res){
        //boss_id로 restaurantidList를 조회
        Boss_DB.findById(req.body.boss_id, function(err, boss){
            if (err) res.send(err)
            res.json(boss.restaurantidList)
        })
    },
    getRestaurantByIndex: function(req, res){
        //restaurantidList의 인덱스 값으로 restaurant를 조회
    },
    createRestaurant: function (req, res) {
        var newAddress = new Address_DB({
            longitude: req.body.address.longitude,
            latitude: req.body.address.latitude,
            sido_name: req.body.address.sido_name,
            sido_code: req.body.address.sido_code,
            sigungu_name: req.body.address.sigungu_name,
            sigungu_code: req.body.address.sigungu_code,
            dong_name: req.body.address.dong_name,
            dong_code: req.body.address.dong_code,
            address_jibun: req.body.address.address_jibun,
            address_road: req.body.address.address_road,
            building_name: req.body.address.building_name,
            building_dong: req.body.address.building_dong,
            building_ho: req.body.address.building_ho,
            building_stair: req.body.address.building_stair
        })
        newAddress.save(function(err, address){
            if (err) res.send(err)
            var newRestaurant = new Restaurant_DB({
                title: req.body.title, type: req.body.type,
                description: req.body.description, 
                address_id: address._id,
                phone: req.body.phone,
                picture: req.body.picture,  //this..
                originMenuList: [],
                menuList: [], paidTicketList: [],
                certifiedTicketList: [], reviewList: [],
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
        })
        return req.body
    },
    updateRestaurant: function(req, res){
        return req.body
    },
    deleteRestaurant: function (req, res) {
        return req.body
    }
}
