// const mongoose = require('mongoose');

// const priceSchema = new mongoose.Schema({
//   //for price
//   heading: {
//     type: String,
//     required: true,
//   },
//   para: {
//     type: String,
//     required: true,
//   },
//   contentList: [
//     {
//       type: String,
//       required: true,
//     },
//   ],

//   //for cart data 
//   cartHeading: [
//     {
//       type: String,
//       required: true,
//     }   
//   ],
//   cartPrice: [
//     {
//       type: Number,
//       required: true,
//     }
//   ], 
//   cartList0: [
//     {
//       type: String,
//       required: true,
//     }
//   ],
//   cartList1: [
//     {
//       type: String,
//       required: true,
//     }
//   ],
//   cartList2: [
//     {
//       type: String,
//       required: true,
//     }
//   ],


// });

// const priceModel = mongoose.model('Price', priceSchema);
// module.exports = priceModel;






const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  //for price
  heading: {
    type: String,
    required: true,
  },
  para: {
    type: String,
    required: true,
  },
  contentList: {
    type: [String],
    required: true,
  },
  //for cart data 
  cartHeading: {
    type: [String],
    required: true,
  },
  cartPrice: {
    type: [Number],
    required: true,
  }, 
  cartList0: {
    type: [String],
    required: true,
  },
  cartList1: {
    type: [String],
    required: true,
  },
  cartList2: {
    type: [String],
    required: true,
  },
});

const priceModel = mongoose.model('Price', priceSchema);
module.exports = priceModel;
