const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");
const { admin } = require("./databse/db");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

const adminmiddleware= async(req,res,next)=>{
    const Administhere= await admin.findOne({
        username:req.headers.username
    })
    if(Administhere)
   {
    next();
   }
   else{
    res.status(404).json({
        Message:"You Are Not A Admin"
    })
   }
}


module.exports = {
    authMiddleware:authMiddleware,
    adminmiddleware:adminmiddleware,
}