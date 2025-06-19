const jwt = require("jsonwebtoken");
const { UserModel } = require("../db");

require('dotenv').config()
const JWT_SECRET_USER = process.env.JWT_SECRET_USER


async function userAuthMiddleware(req,res,next){

    try{
        const token = req.headers.token;
        const decodedInfo = jwt.verify(token,JWT_SECRET_USER)

        const id = decodedInfo.id;

        const user = await UserModel.findOne({
            _id:id
        })

        if(user){
            req.userId = user._id;
            next();
        }
        else{
            return res.status(401).json({
                message:"user does not exist"
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
    userAuthMiddleware:userAuthMiddleware
}