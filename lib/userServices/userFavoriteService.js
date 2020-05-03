var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.addRestaurantToFavoriteList = function (request, response) {
    response.writeHead(200);
    response.end('addRestaurantToFavoriteList');
}

exports.getFavoriteList = function (request, response) {
    response.writeHead(200);
    response.end('getFavoriteList');
}

exports.deleteRestaurantInFavoriteList = function (request, response) {
    response.writeHead(200);
    response.end('deleteRestaurantInFavoriteList');
}
