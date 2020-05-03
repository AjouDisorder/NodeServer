var http = require('http');
var url = require('url');
var qs = require('querystring');

//lib
var loginService = require('./lib/loginService');
var userInfoService = require('./lib/userServices/userInfoService');
var userSearchService = require('./lib/userServices/userSearchService');
var userTicketService = require('./lib/userServices/userTicketService');
var userWishListService = require('./lib/userServices/userWishListService');
var userFavoriteService = require('./lib/userServices/userFavoriteService');
var userReviewService = require('./lib/userServices/userReviewService');
var bossRestaurantService = require('./lib/bossServices/bossRestaurantManageService');
var bossOriginService = require('./lib/bossServices/bossOriginMenuService');
var bossMenuService = require('./lib/bossServices/bossMenuService');
var bossTicketService = require('./lib/bossServices/bossTicketService');
var bossReviewService = require('./lib/bossServices/bossReviewService');
var bossInfoService = require('./lib/bossServices/bossInfoService');

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
      userInfoService.setAddress(request, response)
    }else if (pathname === '/user/updateInfo'){
      userInfoService.updateInfo(request, response)
    }
    //userServices - search service
    else if (pathname === '/user/getMenuBySearchBar'){
      userSearchService.getMenuBySearchBar(request, response)
    }else if (pathname === '/user/getMenuByCategory'){
      userSearchService.getMenuByCategory(request, response)
    }else if (pathname === '/user/getMenuByTime'){
      userSearchService.getMenuByTime(request, response)
    }else if (pathname === '/user/getMenuDetail'){
      userSearchService.getMenuDetail(request, response)
    }else if (pathname === '/user/getRestaurantBySearchBar'){
      userSearchService.getRestaurantBySearchBar(request, response)
    }else if (pathname === '/user/getRestaurantByCategory'){
      userSearchService.getRestaurantByCategory(request, response)
    }else if (pathname === '/user/getRestaurantDetail'){
      userSearchService.getRestaurantDetail(request, response)
    }
    //userServices - ticket service
    else if (pathname === '/user/getAvailableTicketMethod'){
      userTicketService.getAvailableTicketMethod(request, response)
    }else if (pathname === '/user/createTicket'){
      userTicketService.createTicket(request, response)
    }else if (pathname === '/user/payTicket'){  //payment_start !!
      userTicketService.payTicket(request, response)
    }else if (pathname === '/user/addTicketList'){  //payment_complete !!
      userTicketService.addTicketList(request, response)
    }else if (pathname === '/user/getTicketList'){  //pay log
      userTicketService.getTicketList(request, response)
    }
    //userServices - wish list service
    else if (pathname === '/user/addMenuToWishList'){
      userWishListService.addMenuToWishList(request, response)
    }else if (pathname === '/user/getWishList'){
      userWishListService.getWishList(request, response)
    }else if (pathname === '/user/deleteMenuInWishList'){
      userWishListService.deleteMenuInWishList(request, response)
    }
    //userServices - favorite service
    else if (pathname === '/user/addRestaurantToFavoriteList'){
      userFavoriteService.addRestaurantToFavoriteList(request, response)
    }else if (pathname === '/user/getFavoriteList'){
      userFavoriteService.getFavoriteList(request, response)
    }else if (pathname === '/user/deleteRestaurantInFavoriteList'){
      userFavoriteService.deleteRestaurantInFavoriteList(request, response)
    }
    //userServices - review service
    else if (pathname === '/user/createReview'){
      userReviewService.createReview(request, response)
    }else if (pathname === '/user/updateReview'){
      userReviewService.updateReview(request, response)
    }else if (pathname === '/user/deleteReview'){
      userReviewService.deleteReview(request, response)
    }
    
    //bossServices - restaurant manage service
    else if (pathname === '/boss/getRestaurantList'){
      
    }else if (pathname === '/boss/createRestaurant'){
      
    }else if (pathname === '/boss/updateRestaurant'){
      
    }else if (pathname === '/boss/deleteRestaurant'){
      
    }
    //bossServices - origin menu service
    else if (pathname === '/boss/createOriginMenu'){
      
    }else if (pathname === '/boss/updateOriginMenu'){
      
    }else if (pathname === '/boss/deleteOriginMenu'){
      
    }else if (pathname === '/boss/getOriginMenuList'){
      
    }
    //bossServices - menu service
    else if (pathname === '/boss/createMenu'){
      
    }else if (pathname === '/boss/updateMenu'){
      
    }else if (pathname === '/boss/deleteMenu'){
      
    }
    //bossServices - ticket service
    else if (pathname === '/boss/getPaidTicketList'){
      
    }else if (pathname === '/boss/setTicketDisable'){
      
    }else if (pathname === '/boss/getCertifiedTicketList'){
      
    }
    //bossServices - review service
    else if (pathname === '/boss/getReviewList'){
      
    }else if (pathname === '/boss/createReply'){
      
    }else if (pathname === '/boss/updateReply'){
      
    }else if (pathname === '/boss/deleteReply'){
      
    }
    //bossServices - info service
    else if (pathname === '/boss/updateInfo'){
      
    }
    else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
