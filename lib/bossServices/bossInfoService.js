var url = require('url');
var qs = require('querystring');

var db = require('../mongoCollections')

exports.updateInfo = function (request, response) {
    response.writeHead(200);
    response.end('updateInfo');
}
