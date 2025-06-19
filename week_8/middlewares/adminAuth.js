const jwt = require("jsonwebtoken");
const { AdminModel } = require("../db");

require('dotenv').config()
const JWT_SECRET_ADMIN = process.env.JWT_SECRET_ADMIN


async function adminAuthMiddleware(req,res,next){

    try{
        const token = req.headers.token;
        const decodedInfo = jwt.verify(token,JWT_SECRET_ADMIN)

        const id = decodedInfo.id;

        const admin = await AdminModel.findOne({
            _id:id
        })

        if(admin){
            req.adminId = admin._id;
            next();
        }
        else{
            return res.status(401).json({
                message:"admin does not exist"
            })
        }

    }
    catch(e){
        return res.status(401).json({
            message:"expired token/session"
        })

    }
  
}

module.exports = {
    adminAuthMiddleware:adminAuthMiddleware
}