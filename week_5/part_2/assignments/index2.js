// Create a middleware that counts total number of 
// requests sent to a server. Also create an endpoint that exposes it


const express=require("express");
const app=express();


// this middleware ensures that the body content is correctly parsed into json
app.use(express.json());



let count=0;
// my middleware
app.use(function(req,res,next){
    count++;
    if(req.url=="/expose"){
        count--;
        console.log(count);
    }
    next();
})

app.get("/call",function(req,res){
    res.send({"task":"done"})
})

app.get("/expose",function(req,res){    
    res.send({"count":count})

})





app.listen(3000,"0.0.0.0",() => {
    console.log('Server running on http://0.0.0.0:3000');
  });
