var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.getReviewList = function (request, response) {
    response.writeHead(200);
    response.end('getReviewList');
}

exports.createReply = function (request, response) {
    response.writeHead(200);
    response.end('createReply');
}

exports.updateReply = function (request, response) {
    response.writeHead(200);
    response.end('updateReply');
}

exports.deleteReply = function (request, response) {
    response.writeHead(200);
    response.end('deleteReply');
}
