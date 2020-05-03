var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.createOriginMenu = function (request, response) {
    response.writeHead(200);
    response.end('createOriginMenu');
}

exports.updateOriginMenu = function (request, response) {
    response.writeHead(200);
    response.end('updateOriginMenu');
}

exports.deleteOriginMenu = function (request, response) {
    response.writeHead(200);
    response.end('deleteOriginMenu');
}

exports.getOriginMenuList = function (request, response) {
    response.writeHead(200);
    response.end('getOriginMenuList');
}
