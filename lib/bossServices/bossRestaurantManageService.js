var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.getRestaurantList = function (request, response) {
    response.writeHead(200);
    response.end('getRestaurantList');
}

exports.createRestaurant = function (request, response) {
    response.writeHead(200);
    response.end('createRestaurant');
}

exports.updateRestaurant = function (request, response) {
    response.writeHead(200);
    response.end('updateRestaurant');
}

exports.deleteRestaurant = function (request, response) {
    response.writeHead(200);
    response.end('deleteRestaurant');
}
