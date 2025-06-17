const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")
const JWT_SECRET = "IHSFVIPVSOJDNWO"

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ahujasarthak17:jBMnWuhYQup5QjlR@cluster0.ibzlnrz.mongodb.net/test")

const {UserModel,TodoModel} = require("./db")
 
app.use(express.json())

app.post("/signup",async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;

    await UserModel.create({
        name:name,
        email:email,
        pass:pass
    })
    res.json({ message: "Signup successful" });


})

app.post("/login",async (req,res)=>{
    const email = req.body.email;
    const pass = req.body.pass;

    const user = await UserModel.findOne({
        email:email,
        pass:pass
    })

    if(user){
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