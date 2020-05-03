var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.getMenuBySearchBar = function (request, response) {
    response.writeHead(200);
    response.end('getMenuBySearchBar');
}

exports.getMenuByCategory = function (request, response) {
    response.writeHead(200);
    response.end('getMenuByCategory');
}

exports.getMenuByTime = function (request, response) {
    response.writeHead(200);
    response.end('getMenuByTime');
}

exports.getMenuDetail = function (request, response) {
    response.writeHead(200);
    response.end('getMenuDetail');
}

exports.getRestaurantBySearchBar = function (request, response) {
    response.writeHead(200);
    response.end('getRestaurantBySearchBar');
}

exports.getRestaurantByCategory = function (request, response) {
    response.writeHead(200);
    response.end('getRestaurantByCategory');
}

exports.getRestaurantDetail = function (request, response) {
    response.writeHead(200);
    response.end('getRestaurantDetail');
}
