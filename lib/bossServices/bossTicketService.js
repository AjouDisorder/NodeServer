var db = require('../mongoCollections')

module.exports = {
    getPaidTicketList: function(req, res){
        return {"getPaidTicketList":"getPaidTicketList"}
    },
    setTicketDisable: function(req, res){
        return req.body
    },
    getCertifiedTicketList: function (req, res) {
        return {"getCertifiedTicketList":"getCertifiedTicketList"}
    }
}
