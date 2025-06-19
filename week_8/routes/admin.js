const {Router} = require("express")
const adminRouter = Router()

const {AdminModel} = require("../db")
const {CourseModel} = require("../db")




// importing zod(for input validation)
// importing bcrypt for password hashing
// importing jwt for token and session managment
const {z} = require("zod")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


// importing JWT_SECRET from .env file
require('dotenv').config()
const JWT_SECRET_ADMIN = process.env.JWT_SECRET_ADMIN

const {adminAuthMiddleware} = require("../middlewares/adminAuth")

// Add routes for admin login, admin signup, create a course, delete a course, add course content.

adminRouter.post("/signup",async(req,res)=>{


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
    
            await AdminModel.create({
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
                message:"Admin already exists"
            })
        }
        
    


})
adminRouter.post("/login",async(req,res)=>{


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
        const admin = await AdminModel.findOne({
            email:email
        })


        const passMatch = await bcrypt.compare(pass,admin.pass);
        if(passMatch){
            const token = jwt.sign({
                id:admin._id
            },JWT_SECRET_ADMIN)

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


// for all the actions listed below 
// they can only be perfomed by an admin
// thus we have an admin authentication middleware
adminRouter.use(adminAuthMiddleware);



adminRouter.put("/create/course",async(req,res)=>{
    const bodySchema = z.object({
        title:z.string().min(3).max(100),
        price:z.number(),
        info:z.string().min(5),
        imageURL:z.string()
    })
    const adminId = req.adminId;
    const title = req.body.title;
    const price = req.body.price;
    const info = req.body.info;
    const imageURL = req.body.imageURL;

    // check if the course already exists

    try{
        const courseExists = await CourseModel.findOne({
            title:title,
            price:price,
            info:info,
            imageURL:imageURL,
        })

        if(courseExists){
            return res.status(400).json({
                message:"course already exists"
            })
        }
    }
    catch(e){
        return res.status(404).json({
            message:"oops something went wrong"
        })
    }


    try{
        await CourseModel.create({
            title:title,
            price:price,
            info:info,
            imageURL:imageURL,
            adminId:adminId
        })
        return res.json({
            message:"course created successfully"
        })
    }
    catch(e){
        return res.status(404).json({
            message:"oops something went wrong"
        })

    }
    
    
    
})
adminRouter.post("/delete/course",async(req,res)=>{

    const adminId = req.adminId;
    const courseId = req.body.courseId;


    try{
        // Returns the deleted document (or null if not found)
        const deleted = await CourseModel.findByIdAndDelete(courseId);

        if(deleted){
            return res.json({
                message:"course deleted successfully"
            })
        }
        else{
            return res.status(400).json({
            message:"course does not exists or deletion failed"
        })

        }
        
    }
    catch(e){
        return res.status(400).json({
            message:"course does not exists or deletion failed"
        })
    }



    
})
// adminRouter.put("/add/course",(req,res)=>{

    
// })

module.exports = {
    adminRouter:adminRouter
}