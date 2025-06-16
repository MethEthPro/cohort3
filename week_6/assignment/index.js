const express = require("express")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const path = require('path');

const app = express()
const JWT_SECRET = "SRFHKSFFVDSVR"

app.use(express.json());


// serving the html on the same server as the backend

// app.get("/",(req,res)=>{
//     res.sendFile
// })


const users = []



// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/home.html")
})

app.post("/signup",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;

    const user = users.find(user=>user.email==email)

    // check if email is already in use
    if(user){
        return res.status(402).json({
            error:"user already exists please sign up again"
        })
    }
    else{
        users.push({
            name:name,
            email:email,
            pass:pass,
            todos:[]
        })
        console.log(users);
        return res.json({
            message:"User signed up successfully"
        })
    }
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

        console.log(users);
        return res.json({
            message:"User signed in successfully",
            token:token
        })
    }
    else{
        return res.status(404).json({
            error:"Incorrect email or password, please sign in again"
        })
    }
})



// middleware to verify the session of the user , using the token
app.use((req,res,next)=>{
    console.log(1);
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "JWT must be provided" });
    }
    console.log(2)
    try{
        const token = authHeader.split(" ")[1];
        const decodedInfo = jwt.verify(token,JWT_SECRET);
        const name = decodedInfo.name;
        const email = decodedInfo.email;
        const user = users.find(user=>user.email==email && user.name==name)

        if(user){
            req.user = user;
            next();
        }
        else{
            return res.status(404).json({
                error:"user not found"
            })
        }
    } 
    catch(e){
        return res.status(401).json({
            error:"expired or incorrect token"
        })
    }
})


if(!fs.existsSync("todos.json")){
    fs.writeFileSync("todos.json",JSON.stringify({}), "utf-8");
}

app.post("/addTODO",(req,res)=>{

    const user = req.user;
    let todo = req.body.todo;
    let raw = fs.readFileSync("todos.json", "utf-8");
    let content;

    if (raw.trim().length === 0) {
        content = {};
    } else {
        content = JSON.parse(raw);
    }


    let userKey = user.email;
    let lastkey;
    if(!content[userKey]){
        content[userKey] = {}
        lastkey = 0;
    }
    else{
        // now we want to find the no of todos the user have
    // so we get first all the todos key that are "1","2","3" ... in an array
    // convert it into integer so [1,2,3]
    // then find the max value of the keys
    // then just add 1 to it , that wil be our new todo number
        const keys = Object.keys(content[userKey]).map(Number);
        lastkey = keys.length ? Math.max(...keys) : 0; 

    }

     
    
    
    content[userKey][lastkey+1] = todo;

    try{
        fs.writeFileSync("todos.json", JSON.stringify(content, null, 2), 'utf8'); // Beautify with 2-space indentation
        console.log('File updated successfully!');
        return res.json({ message: "TODO added successfully", id: lastkey+1 });
        } 
    catch(err){
        console.error('post: Error writing to the file:', err);
        return res.status(500).json({ error: "Failed to write todo" });
        }
        
      

})

app.get("/getTODO",(req,res)=>{
    const user = req.user;

    let raw = fs.readFileSync("todos.json", "utf-8");
    let content;

    if (raw.trim().length === 0) {
        content = {};
    } else {
        content = JSON.parse(raw);
    }


    res.json(content[user.email]);

})

app.post("/updateTODO", (req, res) => {
    const user = req.user;
    const { id, updated } = req.body;

    let raw = fs.readFileSync("todos.json", "utf-8");
    let content = raw.trim().length ? JSON.parse(raw) : {};

    const userTodos = content[user.email] || {};

    if (!userTodos[id]) {
        return res.status(404).json({ error: "TODO not found" });
    }

    userTodos[id] = updated;

    content[user.email] = userTodos;

    try {
        fs.writeFileSync("todos.json", JSON.stringify(content, null, 2), "utf-8");
        return res.json({ message: "TODO updated successfully" });
    } catch (err) {
        return res.status(500).json({ error: "Failed to update TODO" });
    }
});


app.listen(3000,"",()=>{
    console.log("server running on http://localhost:3000")
})