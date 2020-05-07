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
                age: req.body.age,
                sex: req.body.sex,
                phone: req.body.phone,
                address_id: req.body.address_id,
                ticketList: [],
                favoriteRestaurantidList: [],
                wishList: []
        });
        newUser.save(function (error, newUser) {
            if (error) { 
                throw error;
            }
            console.log("user is signed up!");
            res.json(newUser);
          });
    },
    userLogin: function (req, res) {
        var userId = req.body.userId;
        var password = req.body.password;

        console.log(userId, password);
        console.log(typeof userId, typeof password);

        if(typeof userId !== "string" || typeof password !== "string"){
            res.send("fail!!");
        }
        User_DB.findOne({userId: userId, password: password}).exec((err, result) =>{
            if(result){
                res.send("login success");
            }
            else{
                res.send("login failed");
            }
        });

    },
    bossSignup: function(req, res){
        var newBoss = new Boss_DB({
            bossId: req.body.bossId, 
            password: req.body.password,
            name: req.body.name,
            age: req.body.age,
            sex: req.body.sex,
            phone: req.body.phone,
            restaurantidList: []


    });
    newBoss.save(function (error, newBoss) {
        if (error) { 
            throw error;
        }
        console.log("boss is signed up!");
        res.json(newBoss);
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
