// using jwts instead of the manually generated token
// so will replace token logic with jwt
// for this you have to add the jsonwebtoken library as a dependency
// so npm install jsonwebtoken

const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")

// A JWT_SECRET is a secret key used to sign and/or verify a JWT (JSON Web Token).
const JWT_SECRET='ifvbwnrkngvwovnwo'


const users = []

app.use(express.json())


app.post("/signup",(req,res)=>{
    // input validation using zod
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    users.push({
        "name":name,
        "email":email,
        "pass":pass
    })
    res.json({
        message: "user signed up successfully",
        users: users
    })
})

app.post("/signin",(req,res)=>{
    const email = req.body.email;
    const pass = req.body.pass;

    const user = users.find(function(u){
        if(u.email==email && u.pass == pass) return true;
        else return false;
    })

    if(user){

        const token = jwt.sign({
            email:email
        },JWT_SECRET);
        // convert their email over to a jwt


        // user['token']=token;  no need to store token in memory now
        res.json({
                message:"user signed in successfully",
                token:token,
                users:users
            })
    }
    else{
        res.status(403).send({
            message:"invalid username or password"
        })
    }
    
})

// creating an authenticated endpoint
// we create an endpoint /me that returns the user their information
// only if they send their token

// so we get a token , we check if a user exists with that token and return them
// their info

// and how will the user send this token to us?
// in the header 
// then the server needs to get the token from the headers
// and find the user and display the info

// so you can go and put it manually for testing in the header section of postman


app.get("/me",(req,res)=>{
    const token = req.headers.token;  // jwt
    const decodedInfo = jwt.verify(token,JWT_SECRET)
    // convert the jwt back to the email
    const email=decodedInfo.email;
    // so basically we got the email , i.e we got the user
    // without going to the database

    // now to get other info we would obviously need to go to db

    const user = users.find(user=>user.email===email);
    if(user){
        res.json({
            name:user.name,
            email:user.email,
            pass:user.pass
        })
    }
    else{
        res.status(401).send({
            message:"Unauthorized"
        })
    }

})

app.listen(3000,"",() =>{
    console.log("server running on : http://localhost:3000")
});