const JWT = require ('jsonwebtoken');
const userAuthModel = require('../models/authModel');


exports.requireLogin = async (req, res, next)=>{

    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({success: false, message: 'Unauthorized : Login First'})
    }

    try {
        const decoded = JWT.verify(token.replace("Bearer", "") ,process.env.SECRET_KEY);
        req.user = decoded;
        next();
       
    } catch (error) {
        return res.status(401).json({success: false, message: 'Unauthorized : Invalid Token'})
        
    }
}


// *********************ISADMIN*******************************
exports.isAdmin = async (req, res, next) => {
    try {
        const user = await userAuthModel.findById(req.user._id);
        if (!user || user.role !== 'admin') {
            return res.status(401).json({ success: false, message: 'You don\'t have permission to access this resource.' });
        }
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Unauthorized Access. Please log in and try again!' });
    }
};
