var url = require('url');
var qs = require('querystring');

var db = require('./mongoCollections')

exports.userSignup = function (request, response) {
    response.writeHead(200);
    response.end('userSignup');
}
exports.userLogin = function (request, response) {
    response.writeHead(200);
    response.end('userLogin');
}

exports.bossSignup = function (request, response) {
    response.writeHead(200);
    response.end('bossSignup');
}
exports.bossLogin = function (request, response) {
    response.writeHead(200);
    response.end('bossLogin');
}
