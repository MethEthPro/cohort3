const express = require("express")
const app = express()


const users = []
function generateToken(){
    
    let token="";
    const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0;i<50;i++){
        const n =Math.floor(Math.random() * 62);
        token += characters[n];
    }

    return token;
}
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
        const token = generateToken();
        user['token']=token;
        res.json({
                message:"user signed in successfully",
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
    const token = req.headers.token;
    const user = users.find(user=>user.token===token);
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