// Create a middleware function that logs each incoming request’s HTTP method,
//  URL, and timestamp to the console


const express=require("express");
const app=express();

app.use(express.json());

// my middleware
app.use(function(req,res,next){
    const url=req.url;
    const method=req.method;
    const time=new Date().toISOString();

    console.log(url+" "+method+" "+time);
    next();

})

app.get("/call",function(req,res){

    console.log("route reached");
    res.send("done");
})



app.listen(3000,"0.0.0.0",() => {
    console.log('Server running on http://0.0.0.0:3000');
  });
