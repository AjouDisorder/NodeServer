var db = require('../mongoCollections')
var User_DB = db.collection_user()
var Address_DB = db.collection_address()

module.exports = {
    setAddress: function(req, res){
        User_DB.findById(req.body.user_id, function (err, user) {
            if (err) res.send(err)
            Address_DB.findById(user.address_id, function(err2, address){
                if (err2) res.send(err2)
                address.longitude = req.body.address.longitude
                address.latitude = req.body.address.latitude
                address.sido_name = req.body.address.sido_name
                address.sido_code = req.body.address.sido_code
                address.sigungu_name = req.body.address.sigungu_name
                address.sigungu_code = req.body.address.sigungu_code
                address.dong_name = req.body.address.dong_name
                address.dong_code = req.body.address.dong_code
                address.address_jibun = req.body.address.address_jibun
                address.address_road = req.body.address.address_road
                address.building_name = req.body.address.building_name
                address.building_dong = req.body.address.building_dong
                address.building_ho = req.body.address.building_ho
                address.building_stair = req.body.address.building_stair
                address.save(function(error, newData){
                    if (error) res.send(error)
                    res.json(newData)
                })
            })
        })
    },
    updateInfo: function(req, res) {
        User_DB.findById(req.body.user_id, (err, user)=>{
            user.userId = req.body.userId
            user.password = req.body.password
            user.nickname = req.body.nickname
            user.name = req.body.name
            user.sex = req.body.sex
            user.phone = req.body.phone
            user.save((err2, updatedUser)=>{
                res.json(updatedUser)
            })
        })
    }
}