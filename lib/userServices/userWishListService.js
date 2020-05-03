var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.addMenuToWishList = function (request, response) {
    response.writeHead(200);
    response.end('addMenuToWishList');
}

exports.getWishList = function (request, response) {
    response.writeHead(200);
    response.end('getWishList');
}

exports.deleteMenuInWishList = function (request, response) {
    response.writeHead(200);
    response.end('deleteMenuInWishList');
}
