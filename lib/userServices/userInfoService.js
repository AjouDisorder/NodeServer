var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.setAddress = function (request, response) {
    response.writeHead(200);
    response.end('setAddress');
}
exports.updateInfo = function (request, response) {
    response.writeHead(200);
    response.end('updateInfo');
}