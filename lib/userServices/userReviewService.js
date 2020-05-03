var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.createReview = function (request, response) {
    response.writeHead(200);
    response.end('createReview');
}

exports.updateReview = function (request, response) {
    response.writeHead(200);
    response.end('updateReview');
}

exports.deleteReview = function (request, response) {
    response.writeHead(200);
    response.end('deleteReview');
}
