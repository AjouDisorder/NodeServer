var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.getPaidTicketList = function (request, response) {
    response.writeHead(200);
    response.end('getPaidTicketList');
}

exports.setTicketDisable = function (request, response) {
    response.writeHead(200);
    response.end('setTicketDisable');
}

exports.getCertifiedTicketList = function (request, response) {
    response.writeHead(200);
    response.end('getCertifiedTicketList');
}
