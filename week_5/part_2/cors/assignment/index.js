const express=require("express");
const app=express();
const cors=require("cors");

app.use(express.json())

app.use(cors());
// this cors middleware allows every site to hit on it
// we can modify it too , such that only spcific clients could hit it

// app.use(cors({
//     origin: ["http://192.168.1.7:3000"]
// }));



app.post("/sum",function(req,res){
    const a=Number(req.body.a);
    const b=Number(req.body.b);

    res.json({
        sum:a+b
    })
})



app.listen(3001,"0.0.0.0",() => {
    console.log('Server running on http://0.0.0.0:3001');
  });