//lib
var loginService = require('../lib/loginService');
var userInfoService = require('../lib/userServices/userInfoService');
var userSearchService = require('../lib/userServices/userSearchService');
var userTicketService = require('../lib/userServices/userTicketService');
var userWishListService = require('../lib/userServices/userWishListService');
var userFavoriteService = require('../lib/userServices/userFavoriteService');
var userReviewService = require('../lib/userServices/userReviewService');
var bossRestaurantService = require('../lib/bossServices/bossRestaurantManageService');
var bossOriginMenuService = require('../lib/bossServices/bossOriginMenuService');
var bossMenuService = require('../lib/bossServices/bossMenuService');
var bossTicketService = require('../lib/bossServices/bossTicketService');
var bossReviewService = require('../lib/bossServices/bossReviewService');
var bossInfoService = require('../lib/bossServices/bossInfoService');

module.exports = function(app){
   //Login Service
   app.post('/user/signup', function(req, res){
      res.json(loginService.userSignup(req, res))
   })
   app.post('/user/login', function(req, res){
      res.json(loginService.userLogin(req, res))
   })
   app.post('/boss/signup', function(req, res){
      res.json(loginService.bossSignup(req, res))
   })
   app.post('/boss/login', function(req, res){
      res.json(loginService.bossLogin(req, res))
   })

   //userServices - info service
   app.post('/user/address_update', function(req, res){
      res.json(userInfoService.setAddress(req, res))
   })
   app.post('/user/updateInfo', function(req, res){
      res.json(userInfoService.updateInfo(req, res))
   })
    //userServices - search service
   app.get('/user/getMenuBySearchBar', function(req, res){
      res.json(userSearchService.getMenuBySearchBar(req, res))
   })
   app.get('/user/getMenuByCategory', function(req, res){
      res.json(userSearchService.getMenuByCategory(req, res))
   })
   app.get('/user/getMenuByTime', function(req, res){
      res.json(userSearchService.getMenuByTime(req, res))
   })
   app.get('/user/getMenuDetail', function(req, res){
      res.json(userSearchService.getMenuDetail(req, res))
   })
   app.get('/user/getRestaurantBySearchBar', function(req, res){
      res.json(userSearchService.getRestaurantBySearchBar(req, res))
   })
   app.get('/user/getRestaurantByCategory', function(req, res){
      res.json(userSearchService.getRestaurantByCategory(req, res))
   })
   app.get('/user/getRestaurantDetail', function(req, res){
      res.json(userSearchService.getRestaurantDetail(req, res))
   }) 
   //userServices - ticket service
   app.get('/user/getAvailableTicketMethod', function(req, res){
      res.json(userTicketService.getAvailableTicketMethod(req, res))
   })
   app.post('/user/createTicket', function(req, res){
      res.json(userTicketService.createTicket(req, res))
   }) 
   app.post('/user/payTicket', function(req, res){ //payment_start !!
      res.json(userTicketService.payTicket(req, res))
   })
   app.post('/user/addTicketList', function(req, res){   //payment_complete !!
      res.json(userTicketService.addTicketList(req, res))
   })
   app.get('/user/getTicketList', function(req, res){    //pay log
      res.json(userTicketService.getTicketList(req, res))
   })
   //userServices - wish list service
   app.post('/user/addMenuToWishList', function(req, res){
      res.json(userWishListService.addMenuToWishList(req, res))
   })
   app.get('/user/getWishList', function(req, res){
      res.json(userWishListService.getWishList(req, res))
   })
   app.post('/user/deleteMenuInWishList', function(req, res){
      res.json(userWishListService.deleteMenuInWishList(req, res))
   })
   //userServices - favorite service
   app.post('/user/addRestaurantToFavoriteList', function(req, res){
      res.json(userFavoriteService.addRestaurantToFavoriteList(req, res))
   })
   app.get('/user/getFavoriteList', function(req, res){
      res.json(userFavoriteService.getFavoriteList(req, res))
   })
   app.post('/user/deleteRestaurantInFavoriteList', function(req, res){
      res.json(userFavoriteService.deleteRestaurantInFavoriteList(req, res))
   })
   //userServices - review service
   app.post('/user/createReview', function(req, res){
      res.json(userReviewService.createReview(req, res))
   })
   app.post('/user/updateReview', function(req, res){
      res.json(userReviewService.updateReview(req, res))
   })
   app.post('/user/deleteReview', function(req, res){
      res.json(userReviewService.deleteReview(req, res))
   })
    
   //bossServices - restaurant manage service
   app.get('/boss/getRestaurantList', function(req, res){
      res.json(bossRestaurantService.getRestaurantList(req, res))
   })
   app.post('/boss/createRestaurant', function(req, res){
      res.json(bossRestaurantService.createRestaurant(req, res))
   })
   app.post('/boss/updateRestaurant', function(req, res){
      res.json(bossRestaurantService.updateRestaurant(req, res))
   })
   app.post('/boss/deleteRestaurant', function(req, res){
      res.json(bossRestaurantService.deleteRestaurant(req, res))
   })
   //bossServices - origin menu service
   app.post('/boss/createOriginMenu', function(req, res){
      res.json(bossOriginMenuService.createOriginMenu(req, res))
   })
   app.post('/boss/updateOriginMenu', function(req, res){
      res.json(bossOriginMenuService.updateOriginMenu(req, res))
   })
   app.post('/boss/deleteOriginMenu', function(req, res){
      res.json(bossOriginMenuService.deleteOriginMenu(req, res))
   })
   app.get('/boss/getOriginMenuList', function(req, res){
      res.json(bossOriginMenuService.getOriginMenuList(req, res))
   })
   //bossServices - menu service
   app.post('/boss/createMenu', function(req, res){
      res.json(bossMenuService.createMenu(req, res))
   })
   app.post('/boss/updateMenu', function(req, res){
      res.json(bossMenuService.updateMenu(req, res))
   })
   app.post('/boss/deleteMenu', function(req, res){
      res.json(bossMenuService.deleteMenu(req, res))
   })
   //bossServices - ticket service
   app.get('/boss/getPaidTicketList', function(req, res){
      res.json(bossTicketService.getPaidTicketList(req, res))
   })
   app.post('/boss/setTicketDisable', function(req, res){
      res.json(bossTicketService.setTicketDisable(req, res))
   })
   app.get('/boss/getCertifiedTicketList', function(req, res){
      res.json(bossTicketService.getCertifiedTicketList(req, res))
   }) 
   //bossServices - review service
   app.get('/boss/getReviewList', function(req, res){
      res.json(bossReviewService.getReviewList(req, res))
   })
   app.post('/boss/createReply', function(req, res){
      res.json(bossReviewService.createReply(req, res))
   })
   app.post('/boss/updateReply', function(req, res){
      res.json(bossReviewService.updateReply(req, res))
   })
   app.post('/boss/deleteReply', function(req, res){
      res.json(bossReviewService.deleteReply(req, res))
   })
   //bossServices - info service
   app.post('/boss/updateInfo', function(req, res){
      res.json(bossInfoService.updateInfo(req, res))
   })
}