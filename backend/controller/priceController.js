const priceModel = require('../models/priceModel');

// exports.createPrice = async (req, res) => {
//   try {
//     const { heading, para, contentList, cartHeading, cartPrice, cartList0, cartList1, cartList2 } = req.body;
//     if (!heading || !para || !contentList || !cartHeading || !cartPrice || !cartList0 || !cartList1 || !cartList2) {
//       return res.status(400).send({ success: false, message: 'All fields are required' });
//     }
//     // Create / save data in database
//     const newPriceData = await priceModel.create({ heading, para, contentList, cartHeading, cartPrice, cartList0, cartList1, cartList2 });
//     return res.status(201).json({ success: true, message: 'Price Data created successfully', newPriceData });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: `${`internal server error ${error}`}` });
//   }
// };



exports.createPrice = async (req, res) => {
  try {
    const { heading, para, contentList, cartHeading, cartPrice, cartList0, cartList1, cartList2 } = req.body;
    if (!heading || !para || !contentList || !cartHeading || !cartPrice || !cartList0 || !cartList1 || !cartList2) {
      return res.status(400).send({ success: false, message: 'All fields are required' });
    }
    // Create / save data in database
    const newPriceData = await priceModel.create({ heading, para, contentList, cartHeading, cartPrice, cartList0, cartList1, cartList2 });
    return res.status(201).json({ success: true, message: 'Price Data created successfully', newPriceData });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};




//get all price

exports.getAllPrice = async (req ,res)=>{
    try {
        const allPrice = await priceModel.find();
        if (allPrice.length === 0) {
            return res.status(404).json({success: false, message: 'Category Not Found !'});
        }
        return res.status(200).json({success: true, message: 'All price found', allPrice});
        
    } catch (error) {
        return res.status(500).json({success: false, message: `${error}`})
        
    }
}




// get single product
exports.getSinglePackage = async (req, res) => {
  try {
    const { id } = req.params;    
    const singlePackage = await priceModel.findById(id);    
    if (!singlePackage) {
      return res.status(404).json({ success: false, message: 'Single product not found' });
    }
    
    return res.status(200).json({ success: true, message: 'Single product found', singlePackage });
  } catch (error) {
    console.error(`Internal server error: ${error}`);
    return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
  }
};

