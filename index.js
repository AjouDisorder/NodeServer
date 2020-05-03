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

    //userServices - info service
    else if (pathname === '/user/address_update'){

    }else if (pathname === '/user/updateInfo'){
      
    }
    //userServices - search service
    else if (pathname === '/user/getMenuBySearchBar'){
      
    }else if (pathname === '/user/getMenuByCategory'){
      
    }else if (pathname === '/user/getMenuByTime'){
      
    }else if (pathname === '/user/getMenuDetail'){
      
    }else if (pathname === '/user/getRestaurantBySearchBar'){
      
    }else if (pathname === '/user/getRestaurantByCategory'){
      
    }else if (pathname === '/user/getRestaurantDetail'){
      
    }
    //userServices - ticket service
    else if (pathname === '/user/getAvailableTicketMethod'){
      
    }else if (pathname === '/user/createTicket'){
      
    }else if (pathname === '/user/payTicket'){  //payment_start !!
      
    }else if (pathname === '/user/addTicketList'){  //payment_complete !!
      
    }else if (pathname === '/user/getTicketList'){  //pay log
      
    }
    //userServices - wish list service
    else if (pathname === '/user/addMenuToWishList'){
      
    }else if (pathname === '/user/getWishList'){
      
    }else if (pathname === '/user/deleteMenuInWishList'){
      
    }
    //userServices - favorite service
    else if (pathname === '/user/addRestaurantToFavoriteList'){
      
    }else if (pathname === '/user/getFavoriteList'){
      
    }else if (pathname === '/user/deleteRestaurantInFavoriteList'){
      
    }
    //userServices - review service
    else if (pathname === '/user/createReview'){
      
    }else if (pathname === '/user/createReview'){
      
    }else if (pathname === '/user/createReview'){
      
    }
    

    else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
