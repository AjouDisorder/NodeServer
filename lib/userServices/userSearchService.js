var db = require('../mongoCollections')
var Menu_DB = db.collection_menu()
var Restaurant_DB = db.collection_restaurant()

module.exports = {
    getMenuBySearchBar: function(req, res){
        Menu_DB.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[req.query.lat, req.query.lng], 1 / 6378.1]
                },
            },
            title:{$regex: req.query.title, $options: 'i' }


        }).exec((err2,menu) =>{
            if(err2){
                res.send({"result": "search fail!"});
            }
            else{
                res.json(menu);
            }
        });
    },
    getMenuByCategory: function (req, res) {
        Menu_DB.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[req.query.lat, req.query.lng], 1 / 6378.1]
                },
            },
            type :  req.query.type


        }).exec((err2,menu) =>{
            if(err2){
                res.send({"result": "search fail!"});
            }
            else{
                res.json(menu);
            }
        });

    },
    getMenuByTime: function(req, res){
        searchDate = new Date(req.query.year, req.query.month-1, req.query.date, req.query.hour, req.query.min);
        console.log(searchDate)
        Menu_DB.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[req.query.lat, req.query.lng], 1 / 6378.1]
                },
            },
            $and : [{startDateObject : {"$lt": searchDate}},{endDateObject : {"$gte": searchDate}}]


        }).exec((err3,menu) =>{
            if(err3){
                console.log(err3)
                res.send({"result": "search fail!"});
            }
            else{
                res.json(menu);
            }
        });

    },
    getMenuListOfRestaurant: function(req, res){
        Restaurant_DB.findById(req.query.restaurant_id, (err, restaurant)=>{
            Menu_DB.find({
                '_id': { $in: restaurant.menuidList }
            }, function(err2, menuList){
                 res.json(menuList);
            });
        })
    },
    getRestaurantBySearchBar: function(req, res){
        Restaurant_DB.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[req.query.lat, req.query.lng], 1 / 6378.1]
                },
            },
            title:{$regex: req.query.title, $options: 'm'}

        }).exec((err5,restaurant) =>{
            if(err5){
                res.send({"result": "search fail!"});
            }
            else{
                res.json(restaurant);
            }
        });
    },
    getRestaurantByCategory: function(req, res){

        Restaurant_DB.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[req.query.lat, req.query.lng], 1 / 6378.1]
                },
            },
            type :  req.query.type

        }).exec((err6,restaurant) =>{
            if(err6){
                res.send({"result": "search fail!"});
            }
            else{
                res.json(restaurant);
            }
        });
    },
    getRestaurantDetail: function(req, res){
        //아마 없어질듯
        return {"getRestaurantDetail":"getRestaurantDetail"}
    },
}
