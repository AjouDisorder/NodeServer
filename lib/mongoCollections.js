var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/disorder', { useUnifiedTopology: true, useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', function(){
    console.log('Mongo Connection Failed!');
});
db.once('open', function() {
    console.log('Mongo Connected!');
});

const address = mongoose.Schema({
  longitude : String, //경도
  latitude : String,  //위도

  sido_name : String, //시,도 이름
  sido_code : String, //시,도 코드
  sigungu_name : String,  //시,군,구 이름
  sigungu_code : String,  //시,군,구 코드
  dong_name : String, //동 이름
  dong_code : String, //동 코드
  address_jibun : String, //지번 주소
  address_road : String,  //도로명 주소

  building_name : String, //빌딩 이름
  building_dong : String, //빌딩 동
  building_ho : String, //빌딩 호
  building_stair : String //빌딩 층
})

//https://bcho.tistory.com/1096
const picture = mongoose.Schema({
  path : String,
  data : Buffer,
  contentsType : String
})

const originMenu = mongoose.Schema({
  restaurant_id : String, //restaurant's PK
  title : String,
  description : String,
  type : String,
  price : Number,
  picture : picture
})

const menu = mongoose.Schema({
  originMenu : originMenu,
  address : address, //사용자가 메뉴 조회 시, 근처 메뉴를 빠르게 연산하기 위해
  picture : picture,
  discount : Number,
  quantity : Number,
  start_hour : Number,
  start_min : Number,
  end_hour : Number,
  end_min : Number,
  method : String //'takeout', 'forhere', 'both'
})

const ticket = mongoose.Schema({  //구입한 시간 필요할듯;
  restaurant_id : String, //restaurant's PK
  restaurant_address : address,
  userName : String,
  menuName : String,
  method : String, //'takeout' or 'forhere'
  value : String,  //random String (맨 위에 함수)
  available : { type: Boolean, default: true }
})

const review = mongoose.Schema({
  ticket : ticket,
  grade : Number,
  description : String
})

const user = mongoose.Schema({
  userId : String,
  password : String,
  nickname : String,
  name : String,
  age : Number,
  sex : String,
  phone : String,
  address_id : String,
  ticketList : [ticket],
  favoriteRestaurantidList : [String], //restaurant's PK
  wishList : [menu]
  //홍보글 삭제 시 주의! : 홍보글 자동 삭제 -> wishList에 있는 죽은 메뉴 클릭하면?
    //-> menu가 자동 삭제되기 직전에, user는 자동으로 wishList에서 메뉴를 pop한다.
})

const reply = mongoose.Schema({
  review : review,
  description : String
})

const restaurant = mongoose.Schema({
  title : String,
  type : String,
  description : String,
  address_id : String,
  phone : String,
  picture : picture,
  originMenuList : [originMenu],
  menuList : [menu],
  paidTicketList : [ticket],
  certifiedTicketList : [ticket],
  reviewList : [review],
  favoriteCount : { type: Number, default: 0 },
  favoriteUseridList : [String], //user's PK
  profit : { type: Number, default: 0 }
})

const boss = mongoose.Schema({
  bossId : String,
  password : String,
  name : String,
  age : Number,
  sex : String,
  phone : String,
  restaurantidList : [String]
})

module.exports = {
  collection_address:function(){
      return mongoose.model('address', address);    
  },
  collection_picture:function(){
      return mongoose.model('picture', picture);    
  },
  collection_originMenu:function(){
    return mongoose.model('originMenu', originMenu);
  },
  collection_menu:function(){
    return mongoose.model('menu', menu);
  },
  collection_ticket:function(){
    return mongoose.model('ticket', ticket);
  },
  collection_review:function(){
    return mongoose.model('review', review);
  },
  collection_user:function(){
    return mongoose.model('user', user);
  },
  collection_reply:function(){
    return mongoose.model('reply', reply);
  },
  collection_boss:function(){
    return mongoose.model('boss', boss);
  },
  collection_restaurant:function(){
    return mongoose.model('restaurant', restaurant);
  },
}