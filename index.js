var http = require('http');
var url = require('url');
var qs = require('querystring');

//lib
var loginService = require('./lib/loginService');

//db
var db = require('./lib/mongoCollections')
var Address_DB = db.collection_address()
var Picture_DB = db.collection_picture()
var OriginMenu_DB = db.collection_originMenu()
var Menu_DB = db.collection_menu()
var Ticket_DB = db.collection_ticket()
var Review_DB = db.collection_review()
var User_DB = db.collection_user()
var Reply_DB = db.collection_reply()
var Boss_DB = db.collection_boss()
var Restaurant_DB = db.collection_restaurant()

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    //Login Service
    if(pathname === '/user/signup'){
      loginService.userSignup(request, response)
    }else if(pathname === '/user/login'){
      loginService.userLogin(request, response)
    }else if(pathname === '/boss/signup'){
      loginService.bossSignup(request, response)
    }else if(pathname === '/boss/login'){
      loginService.bossLogin(request, response)
    }
    

    else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
