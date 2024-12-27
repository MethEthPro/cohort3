// we have to build a filesystem todo app



const fs=require("fs");
const express=require("express");


// Ensure the data.json file exists or create it
if (!fs.existsSync("data.json")) {
    fs.writeFileSync("data.json", JSON.stringify({}), "utf-8");
}


const app = express();


let mycountmap={};



app.use(express.json());

app.get("/all",function (req,res){
    let data=fs.readFileSync("data.json","utf-8");
    let content=JSON.parse(data);
    res.send(content);
    
})

app.get("/get",function (req,res){
    let userno=req.query.userno;

    let data=fs.readFileSync("data.json","utf-8");
    let content=JSON.parse(data);
    res.send(content[userno]);
    
})


app.post("/addtodo",function (req,res) {
    let userNoStr=req.query.userno;
    let userno=Number(userNoStr);
    let mytodo=req.query.todo;
    let mytime=req.query.time;
    const data = fs.readFileSync("data.json","utf-8");
    const content=JSON.parse(data);
    console.log(content);
    console.log(1);
    if(!mycountmap[userno]){
        mycountmap[userno]=0;
    }
    if(!content[userNoStr]){
        content[userNoStr]={};
    }
    mycountmap[userno]++;
    console.log(2);
    let todono=mycountmap[userno].toString();
    console.log(3);
    content[userNoStr][todono]={"todo":mytodo.toString(),"time":mytime.toString()};
    console.log(4);
    
    res.send(content[userNoStr][todono]);
})


app.listen(3000,"0.0.0.0",() => {
    console.log('Server running on http://0.0.0.0:3000');
  });



