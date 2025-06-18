const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")
const JWT_SECRET = "IHSFVIPVSOJDNWO"

const mongoose = require("mongoose")
mongoose.connect("")

// for hashing of password
const bcrypt = require("bcrypt")

// for input validation
const {z} = require("zod")

const {UserModel,TodoModel} = require("./db")


 
app.use(express.json())

app.post("/signup",async (req,res)=>{

    // defining schema of how req.body should look likr
    const requiredBody = z.object({
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

    // parsing and comparing 
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        
        const messages = parsedDataWithSuccess.error.errors.map(e=>e.message)
        res.json({
            message:"Incorrect format",
            error: messages
        })
        return
    }


    let success = true;
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
    }
    catch(e){
        success = false;
        res.json({
            message:"user already exists"
        })
    }

    if(success){
        res.json({ message: "Signup successful" });
    }

    


})

app.post("/login",async (req,res)=>{

    // defining schema of our req.body
    const loginBody = z.object({
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

    const logindataparsed = loginBody.safeParse(req.body)

    if(!logindataparsed.success){
        const loginerrormessages = logindataparsed.error.errors.map(e=>e.message)
        res.json({
            message:"Incorrect format",
            error: loginerrormessages
        })

        return
    }
    const email = req.body.email;
    const pass = req.body.pass;

    const user = await UserModel.findOne({
        email:email,
    })
    if(!user){
        return res.status(403).json({
            message:"user not found"
        })
    }

    const PasswordMatch = await bcrypt.compare(pass,user.pass);

    if(PasswordMatch){
        const token = jwt.sign({
            id:user._id.toString()
        },JWT_SECRET)
        res.json({
            token:token
        })
    }
    else{
        res.status(401).json({
            message:"Incorrect Credentials"
        })
    }

});


app.use(async(req,res,next)=>{
    const token = req.headers.token;

    try{
        const decodedInfo = jwt.verify(token,JWT_SECRET)
        const id = decodedInfo.id;
        const user = await( UserModel.findById(id));

        if(!user){
            return res.status(403).json({
                message:"invalid or expired token"
            })
        }

        req.user = user
        next()
    }
    catch(err){
        return res.status(403).json({
            message:"Invalid token"
        });
    }

})

app.post("/todo",async(req,res)=>{
    const user = req.user;
    const task = req.body.task;
    const done = req.body.done;

    const id = user._id;


    await TodoModel.create({
        task:task,
        done:done,
        userId:id
    })

    res.json({
        message:"todo created successfully"
    })


})


app.get("/todos",async(req,res)=>{
    const user = req.user;

    const todos = await TodoModel.find({
        userId:user._id
    })

    res.json({
        todos
    })

})

app.listen(3000,"",()=>{
    console.log("server  running on http://localhost:3000")
})