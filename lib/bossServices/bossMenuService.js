var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.createMenu = function (request, response) {
    response.writeHead(200);
    response.end('createMenu');
}

exports.updateMenu = function (request, response) {
    response.writeHead(200);
    response.end('updateMenu');
}

exports.deleteMenu = function (request, response) {
    response.writeHead(200);
    response.end('deleteMenu');
}
