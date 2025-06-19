const {Router} = require("express")
const userRouter = Router();


// importing UserModel from database
const {UserModel} = require("../db")

// importing CourseModel from database
const {CourseModel} = require("../db")

// importing PurchaseModel from database
const {PurchaseModel} = require("../db")


// importing zod(for input validation)
// importing bcrypt for password hashing
// importing jwt for token and session managment
const {z} = require("zod")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


// importing JWT_SECRET from .env file
require('dotenv').config()
const JWT_SECRET_USER = process.env.JWT_SECRET_USER


// importing the authentication middleware
const {userAuthMiddleware} = require("../middlewares/userAuth")




userRouter.post("/signup",async(req,res)=>{

    const bodySchema = z.object({
        name:z.string().
        min(3,"name is too small").
        max(100,"name is too large").
        regex(/^[A-Za-z ]+$/,"name should not contain any special characters"),
        email:z.string().
        min(3,"email is too small").
        max(100,"email is too large").
        email("please use the email format abc@xyz.com"),
        pass:z.string().
        min(3,"password is too small").
        max(100,"password is too large").
        regex(/[a-z]/,"password must contain at least one lowercase letter").
        regex(/[A-Z]/,"password must contain at least one uppercase letter").
        regex(/[^A-Za-z0-9]/,"password must contain at least one special character")
    })

    const parsedDataWithSuccess = bodySchema.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        const errorMessages = parsedDataWithSuccess.error.errors.map(e=>e.message)

        return res.status(400).json({
            message:"incorrect format",
            errors:errorMessages
        })
    }

    try{
        const name = req.body.name;
        const email = req.body.email;
        const pass = req.body.pass;

        const hashedPassword = await bcrypt.hash(pass,5);

        await UserModel.create({
            name:name,
            email:email,
            pass:hashedPassword
        })

        return res.json({
            message:"Signed Up successfully"
        })
    }
    catch(e){
        return res.status(400).json({
            message:"User already exists"
        })
    }
    

    
})



userRouter.post("/login",async(req,res)=>{

    const bodySchema = z.object({
        email:z.string().
        min(3,"email is too small").
        max(100,"email is too large").
        email("please use the email format abc@xyz.com"),
        pass:z.string().
        min(3,"password is too small").
        max(100,"password is too large").
        regex(/[a-z]/,"password must contain at least one lowercase letter").
        regex(/[A-Z]/,"password must contain at least one uppercase letter").
        regex(/[^A-Za-z0-9]/,"password must contain at least one special character")
    })

    const parsedDataWithSuccess = bodySchema.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        const errorMessages = parsedDataWithSuccess.error.errors.map(e=>e.message)

        return res.status(400).json({
            message:"Incorrect format",
            error:errorMessages
        })
    }
    const email = req.body.email;
    const pass = req.body.pass;

    try{
        const user = await UserModel.findOne({
            email:email
        })

        const passMatch = await bcrypt.compare(pass,user.pass);
        if(passMatch){
            const token = jwt.sign({
                id:user._id
            },JWT_SECRET_USER)

            return res.json({
                message:"Successfully signed in",
                token:token
            })
        }
        else{
            return res.status(400).json({
                error:"incorrect password"
            })
        }
    }
    catch(e){
        return res.status(400).json({
            error:"incorrect email"
        })

    }

    

})



userRouter.use(userAuthMiddleware);


// courses purchased by the user
userRouter.get("/purchases",async(req,res)=>{
    const userId = req.userId;

    const purchases = await PurchaseModel.find({
        userId:userId
    })

    if(purchases){
        const courseIds = []
        purchases.forEach(purchase => {
            courseIds.push(purchase.courseId)
        });
        
        return res.json({
            courseIds
        })
    }
    return res.json({
        message:"Oops something went wrong!!"
    })

})


module.exports = {
    userRouter:userRouter
}