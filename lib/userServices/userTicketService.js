var db = require('../mongoCollections')

module.exports = {
    getAvailableTicketMethod: function(req, res){
        return {"getAvailableTicketMethod":"getAvailableTicketMethod"}
    },
    createTicket: function(req, res){
        return req.body
    },
    payTicket: function (req, res) {
        return req.body
    },
    addTicketList: function(req, res){
        return req.body
    },
    getTicketList: function(req, res){
        return {"getTicketList":"getTicketList"}
    }
}
