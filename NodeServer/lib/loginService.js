var db = require('./mongoCollections')
var User_DB = db.collection_user()
var Boss_DB = db.collection_boss()
var Restaurant_DB = db.collection_restaurant()
var Menu_DB = db.collection_menu()

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
                ticketList: [],
                reviewedTicketList: [],
                favoriteRestaurantidList: [],
                wishList: []
        });
        User_DB.findOne({userId: req.body.userId}).exec((err, result) =>{
            if(result){
                res.json({"result" : "userId is duplicated!"});
            }else{
                newUser.save(function (error, newUser) {
                    if (error) { throw error }
                    res.json({"result" : "signup success"});
                });
            }
        });
    },
    userLogin: function (req, res) {
        var userId = req.body.userId;
        var password = req.body.password;

        console.log(userId, password);

        if(typeof userId !== "string" || typeof password !== "string"){
            res.json({"result" : "fail!!"});
        }else{
            User_DB.findOne({userId: userId, password: password}).exec((err, result) =>{
                if(result){
                    console.log(result)
                    res.json(result);
                }
                else{
                    res.json({"result" : "fail!!"});
                }
            });
        }
    },
    bossSignup: function(req, res){
        var newBoss = new Boss_DB({
            bossToken: req.body.bossToken,
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
            }else{
                newBoss.save(function (error, Boss) {
                    if (error) { throw error }
                    res.json({"result" : "signup success"});
                });
            }
        })
    },
    bossLogin: function (req, res) {
        var bossId = req.body.bossId;
        var password = req.body.password;
        var token = req.body.token;

        console.log(bossId, password);
        console.log(typeof bossId, typeof password);

        if(typeof bossId !== "string" || typeof password !== "string"){
            res.json({"result" : "fail!!"});
        }else{
            Boss_DB.findOne({bossId: bossId, password: password}).exec((err, result) =>{
                if(result){
                    result.bossToken = token
                    result.save((err2, updatedBoss)=>{
                        if(updatedBoss){
                            res.json(updatedBoss)
                            Restaurant_DB.find({'_id': { $in: updatedBoss.restaurantidList } }, (err3, restaurantList)=>{
                                for (var i = 0; i<restaurantList.length; i++){
                                    restaurantList[i].token = token
                                    Menu_DB.find({'_id': { $in: restaurantList[i].menuidList} }, (err4, targetMenuList)=>{
                                        for (var i = 0; i<targetMenuList.length; i++){
                                            targetMenuList[i].token = token
                                            targetMenuList[i].save(()=>{ })
                                        }
                                    })
                                    restaurantList[i].save(()=>{ })
                                }
                            })
                        }
                        else{
                            res.send({"result" : "token refresh failed"});
                        }
                        
                    })
                }
                else{
                    res.send({"result" : "login failed"});
                }
            });
        }
    }
}
