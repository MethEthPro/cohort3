const fs=require("fs");

fs.readFile("data2.json","utf-8",function (err,content){
    if(err){
        console.log("error reading the file",err);
        return;
    }
    let data =JSON.parse(content)
    console.log(data["1"]);
})