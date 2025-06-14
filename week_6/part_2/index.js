const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

const JWT_SECRET = "sufbfwhrbhskfnwefcmwl"

app.use(express.json())


const users = []

// we wish to serve the index.html directly from the backend

// so when we go to http://localhost:3000
// the html should run and render
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})


app.post("/signup",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;

    users.push({
        name:name,
        email:email,
        pass:pass
    })
    res.json({
        message:"user signed in successfully"
    })

    console.log(users)
})

app.post("/signin",(req,res)=>{
    const email = req.body.email;
    const pass = req.body.pass;

    const user = users.find(user=>user.email==email && user.pass==pass)

    if(user){
        const token = jwt.sign({
            name:user.name,
            email:user.email
        },JWT_SECRET)

        res.json({
            message:"user signed in successfully",
            token:token
        })

        console.log(users)
    }
    else{
        res.json({
            error:"incorrect details"
        })
    }

    
})


// middleware to check if the user is logged in , if yes then send the request forward
// along with the user 
// if not logged in then give error message

// standard practice (and most JWT libraries/middleware) expect the token under:
// Authorization: Bearer <token>

app.use((req,res,next)=>{
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(401).json({error:"JWT must be provided"})
    }

    const token = authHeader.split(' ')[1]  //splitting and taking the token only
    
    try{
        const decodedInfo = jwt.verify(token, JWT_SECRET);
        const name = decodedInfo.name;
        const email = decodedInfo.email;

        const user = users.find(user=>user.email==email && user.name==name)

        if(user){
            // if user is found
            // we are not only going forward
            // but also sending the data along with it
            req.user = user;

            next();
        }
        else{
            return res.status(404).json({error:"user not found"})
        }
    }   
    catch(e){
        return res.status(403).json({error:"invalid or expired token"})
    }


})
app.get("/myinfo",(req,res)=>{
    

    const user = req.user
    if(user){
        res.json({
            message:"user found",
            name:user.name,
            email:user.email,
            pass:user.pass
        })

        console.log(users)
    }
    else{
        res.json({
            error:"user not found"
        })
    }

})

app.listen(3000,"",()=>{
    console.log("server running on: http://localhost:3000")
})