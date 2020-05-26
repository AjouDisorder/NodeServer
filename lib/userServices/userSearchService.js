var db = require('../mongoCollections')
var Menu_DB = db.collection_menu()
var Restaurant_DB = db.collection_restaurant()

module.exports = {
    getMenuBySearchBar: function (req, res) {
        Menu_DB.aggregate([{
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [parseFloat(req.query.lat), parseFloat(req.query.lng)]
                },
                "distanceField": "distance",
                "maxDistance": 2000,
                "spherical": true,
                "query": {
                    "title": { $regex: req.query.title, $options: 'i' },
                    "alive": true
                }

            }
        }]).exec((err2, menuByS) => {
            if (err2) {
                res.send({ "result": "search fail!" });
            }
            else {
                res.json(menuByS);
            }
        });
    },
    getMenuByCategory: function (req, res) {
        Menu_DB.aggregate([{
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [parseFloat(req.query.lat), parseFloat(req.query.lng)]
                },
                "distanceField": "distance",
                "maxDistance": 2000,
                "spherical": true,
                "query": {
                    "type": req.query.type,
                    "alive": true
                }

            }
        }]).exec((err2, menuByC) => {
            if (err2) {
                res.send({ "result": "search fail!" });
            }
            else {
                res.json(menuByC);
            }
        });

    },
    getMenuByTime: function (req, res) {
        searchDate = new Date(req.query.year, req.query.month - 1, req.query.date, req.query.hour, req.query.min);
        Menu_DB.aggregate([{
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [parseFloat(req.query.lat), parseFloat(req.query.lng)]
                },
                "distanceField": "distance",
                "maxDistance": 2000,
                "spherical": true,
                "query": {
                    "$and" : [{startDateObject : {"$lt": searchDate}},{endDateObject : {"$gte": searchDate}}]
                }

            }
        }]).exec((err2, menuByT) => {
            if (err2) {
                res.send({ "result": "search fail!" });
            }
            else {
                res.json(menuByT);
            }
        });

    },
    getMenuListOfRestaurant: function (req, res) {
        Restaurant_DB.findById(req.query.restaurant_id, (err, restaurant) => {
            Menu_DB.find({
                '_id': { $in: restaurant.menuidList }
            }, function (err2, menuList) {
                res.json(menuList);
            });
        })
    },
    getRestaurantBySearchBar: function (req, res) {
        Restaurant_DB.aggregate([{
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [parseFloat(req.query.lat), parseFloat(req.query.lng)]
                },
                "distanceField": "distance",
                "maxDistance": 2000,
                "spherical": true,
                "query": {
                    "title": { $regex: req.query.title, $options: 'i' }
                }

            }
        }]).exec((err2, restByS) => {
            if (err2) {
                res.send({ "result": "search fail!" });
            }
            else {
                res.json(restByS);
            }
        });
    },
    getRestaurantByCategory: function (req, res) {

        Restaurant_DB.aggregate([{
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [parseFloat(req.query.lat), parseFloat(req.query.lng)]
                },
                "distanceField": "distance",
                "maxDistance": 2000,
                "spherical": true,
                "query": {
                    "type": req.query.type
                }

            }
        }]).exec((err2, restByC) => {
            if (err2) {
                res.send({ "result": "search fail!" });
            }
            else {
                res.json(restByC);
            }
        });
    },
    getRestaurantDetail: function (req, res) {
        //아마 없어질듯
        return { "getRestaurantDetail": "getRestaurantDetail" }
    },
}
