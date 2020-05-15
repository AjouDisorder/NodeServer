var db = require('./mongoCollections')
var User_DB = db.collection_user()
var Boss_DB = db.collection_boss()

module.exports = {
    userSignup: function(req, res){
        var newUser = new User_DB({
                userId: req.body.userId, 
                password: req.body.password,
                nickname: req.body.nickname,
                name: req.body.name,
                dateOfBirth: req.body.dateOfBirth,
                sex: req.body.sex,
                phone: req.body.phone,
                address: req.body.address,
                location : {
                    coordinates : [req.body.lat, req.body.lng]

                },
                ticketList: [],
                favoriteRestaurantidList: [],
                wishList: []
        });
        User_DB.findOne({userId: req.body.userId}).exec((err, result) =>{
            if(result){
                res.json({"result" : "userId is duplicated!"});
            }
            newUser.save(function (error, newUser) {
                if (error) { 
                    throw error;
                }
                console.log("user is signed up!");
                res.json(newUser);
              });

        });
    },
    userLogin: function (req, res) {
        var userId = req.body.userId;
        var password = req.body.password;

        console.log(userId, password);
        console.log(typeof userId, typeof password);

        if(typeof userId !== "string" || typeof password !== "string"){
            res.json({"result" : "fail!!"});
        }
        User_DB.findOne({userId: userId, password: password}).exec((err, result) =>{
            if(result){
                res.json({"result" : "login success"});
            }
            else{
                res.json({"result" : "login failed"});
            }
        });

    },
    bossSignup: function(req, res){
        var newBoss = new Boss_DB({
            bossId: req.body.bossId, 
            password: req.body.password,
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            sex: req.body.sex,
            phone: req.body.phone,
            restaurantidList: []

    });
    Boss_DB.findOne({bossId: req.body.bossId}).exec((err, result) =>{
        if(result){
            res.json({"result" : "bossId is duplicated!"});
        }
        newBoss.save(function (error, Boss) {
            if (error) { 
                throw error;
            }
            console.log("boss is signed up!");
            res.json(Boss);
          });

    });
    },
    bossLogin: function (req, res) {
        var bossId = req.body.bossId;
        var password = req.body.password;

        console.log(bossId, password);
        console.log(typeof bossId, typeof password);

        if(typeof bossId !== "string" || typeof password !== "string"){
            res.send("fail!!");
        }
        Boss_DB.findOne({bossId: bossId, password: password}).exec((err, result) =>{
            if(result){
                res.send("login success");
            }
            else{
                res.send("login failed");
            }
        });
    }
}
