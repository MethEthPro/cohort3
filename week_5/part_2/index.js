// the express route handeler is basically a series of middleware only

const express=require("express");
const app=express();



// this is a middleware
// we have been using it a lot 
// Middleware to parse JSON request bodies
app.use(express.json());



// there are many ways to use middlewares

let drinkcount=0;

// defined the middleware
function myMiddleware(req,res,next){
    if(req.body.age>18){
        next();
    }
    else{
        res.json({
            error:"not of age"
        })
    }
}


function drinkKaro(req,res){
    drinkcount+=req.body.drinks;
    res.json({
        "drinkcount":drinkcount
    })
}


// we can either pass the middleware manually 
// in each route 
// Apply middleware to a specific route
app.get("/drink1",myMiddleware,drinkKaro);



// or we could do something like 


app.use(myMiddleware);
// this ensures that it accts like a middleware for all the routes written below it


app.get("/drink2",drinkKaro);
app.get("/drink3",drinkKaro);

app.listen(3000,"0.0.0.0",() => {
    console.log('Server running on http://0.0.0.0:3000');
  });