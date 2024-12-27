// we have to build an in memmory todo app


// database=[
//     {
//         1={
//             "todo":"study",
//             "time":"09:00"
//         }
//         2={
//             "todo":"play",
//             "time":"18:00"
//         }
//     },
//     {
//              {

//              }

//     }

// ]





let database=[];


let mycountmap=[];
for(let i=0;i<100;i++){
    database[i]={};
    mycountmap[i]=0;
}

const express = require("express");

const app = express();

app.get("/all",function (req,res){
    res.send(database);
})

app.get("/get",function (req,res){
    let userno=req.query.userno;
    res.send(database[userno]);
})
app.use(express.json());


app.post("/addtodo",function (req,res) {
    let userno=Number(req.query.userno);
    let mytodo=req.query.todo;
    let mytime=req.query.time;

    mycountmap[userno]++;
    let todono=mycountmap[userno].toString();
    database[userno][todono]={"todo":mytodo.toString(),"time":mytime.toString()};

    
    res.send(database[userno][todono]);
})


app.listen(3000,"0.0.0.0",() => {
    console.log('Server running on http://0.0.0.0:3000');
  });