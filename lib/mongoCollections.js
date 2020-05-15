var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/disorder', { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', function () {
  console.log('Mongo Connection Failed!');
});
db.once('open', function () {
  console.log('Mongo Connected!');
});

const picture = mongoose.Schema({
  path: String,
  data: Buffer,
  contentsType: String
})

const originMenu = mongoose.Schema({
  restaurant_id: String, //restaurant's PK
  title: String,
  description: String,
  type: String,
  price: Number,
  picture: picture
})

const menu = mongoose.Schema({
  originMenu: originMenu,
  address: address, //사용자가 메뉴 조회 시, 근처 메뉴를 빠르게 연산하기 위해
  picture: picture,
  discount: Number,
  quantity: Number,
  start_hour: Number,
  start_min: Number,
  end_hour: Number,
  end_min: Number,
  method: String, //'takeout', 'forhere', 'both',
  alive: { type: Boolean, default: true }
})

const ticket = mongoose.Schema({  //구입한 시간 필요할듯?
  restaurant_id: String, //restaurant's PK
  address: address,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
  },

  price: Number,
  userName: String,
  menuName: String,
  method: String, //'takeout' or 'forhere'
  value: String,  //random String
  available: { type: Boolean, default: true },
  messageForBoss: String
  //추후 결제 관련 attribute가 필요할 수도..? 아니면 새로운 스키마 id 참조
})

const review = mongoose.Schema({
  ticket: ticket,
  grade: Number,
  description: String,
  reply: { type: String, default: null }
})

const user = mongoose.Schema({
  userId: String,
  password: String,
  nickname: String,
  name: String,
  dateOfBirth: String,
  sex: String,
  phone: String,
  address: String,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
  },
  ticketidList: [String],
  favoriteRestaurantidList: [String], //restaurant's PK
  wishList: [String] //메뉴id
  //홍보글 삭제 시 주의! : 홍보글 자동 삭제 -> wishList에 있는 죽은 메뉴 클릭하면?
  //-> menu가 자동 삭제되기 직전에, user는 자동으로 wishList에서 메뉴를 pop한다.
})

const restaurant = mongoose.Schema({
  title: String,
  type: String,
  description: String,
  address: address,
  phone: String,
  picture: picture,
  originMenuList: [originMenu],
  menuidList: [String],
  paidTicketidList: [String],
  certifiedTicketidList: [String],
  reviewidList: [String],
  favoriteCount: { type: Number, default: 0 },
  favoriteUseridList: [String], //user's PK
  profit: { type: Number, default: 0 }
})

const boss = mongoose.Schema({
  bossId: String,
  password: String,
  name: String,
  dateOfBirth: String,
  sex: String,
  phone: String,
  restaurantidList: [String]
})

module.exports = {
  collection_picture: function () {
    return mongoose.model('picture', picture);
  },
  collection_originMenu: function () {
    return mongoose.model('originMenu', originMenu);
  },
  collection_menu: function () {
    return mongoose.model('menu', menu);
  },
  collection_ticket: function () {
    return mongoose.model('ticket', ticket);
  },
  collection_review: function () {
    return mongoose.model('review', review);
  },
  collection_user: function () {
    return mongoose.model('user', user);
  },
  collection_reply: function () {
    return mongoose.model('reply', reply);
  },
  collection_boss: function () {
    return mongoose.model('boss', boss);
  },
  collection_restaurant: function () {
    return mongoose.model('restaurant', restaurant);
  },
}