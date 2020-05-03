var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.getAvailableTicketMethod = function (request, response) {
    response.writeHead(200);
    response.end('getAvailableTicketMethod');
}

exports.createTicket = function (request, response) {
    response.writeHead(200);
    response.end('createTicket');
}

exports.payTicket = function (request, response) {
    response.writeHead(200);
    response.end('payTicket');
}

exports.addTicketList = function (request, response) {
    response.writeHead(200);
    response.end('addTicketList');
}

exports.getTicketList = function (request, response) {
    response.writeHead(200);
    response.end('getTicketList');
}
