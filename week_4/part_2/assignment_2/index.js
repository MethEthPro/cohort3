// we have to build a filesystem todo app



const fs=require("fs");
const express=require("express");


// Ensure the data.json file exists or create it
if (!fs.existsSync("data.json")) {
    fs.writeFileSync("data.json", JSON.stringify({}), "utf-8");
}


const app = express();

// this keeps a count of how many todos each user has
// something like 
// user 0 has 1 todo , user 1 has 3 todo , user 2 has 1 todo
// {
//     0:1,
//     1:3,
//     2:1
// }
let mycountmap={};

// now as we have initalised the countmap as empty
// we will first need to read from out json file
// to see which user has how many todos
// data read by readFileSync is only text
// so we parse it into JSON

// we iterate over the content
// for each user we iterate over its todos to get the last key , eg "3"
// then we set it in the countmap
// eg if for user 1 , there were 2 todos
// then mycountmap[1]=2 

let data=fs.readFileSync("data.json","utf-8");
let content=JSON.parse(data);
Object.entries(content).forEach(([KEY,VALUE]) => {
    let last="";
    Object.keys(VALUE).forEach((key) => {
        last=key;
    });
    let intuser=Number(KEY);
    let intlast=Number(last);
    mycountmap[intuser]=intlast;
    
});



app.use(express.json());



// this route shows the entire database

app.get("/all",function (req,res){
    let data=fs.readFileSync("data.json","utf-8");
    let content=JSON.parse(data);
    res.send(content);
    
})


// this route shows the todos of a specific user , we have to give the userno in body
app.get("/get",function (req,res){
    let userno=req.body.userno;

    let data=fs.readFileSync("data.json","utf-8");
    let content=JSON.parse(data);
    res.send(content[userno]);
    
})



// this route allows us to add a todo
// we have to add userno,mytodo,mytime in body

// if the user does not exist in the countmap
// then we create the user in countmap and set it todos to 0

// if the user does not exist in our database as well
// then we add the userno as key and its value as {}


// then we add the todo and time to that users particular todo
// and then write it back the content to our file

// and then res.send the particular todo

app.post("/addtodo",function (req,res) {
    let userNoStr=req.body.userno;
    let userno=Number(userNoStr);
    let mytodo=req.body.todo;
    let mytime=req.body.time;
    const data = fs.readFileSync("data.json","utf-8");
    const content=JSON.parse(data);


    if(!mycountmap[userno]){
        mycountmap[userno]=0;
    }
    if(!content[userNoStr]){
        content[userNoStr]={};
    }
    mycountmap[userno]++;

    let todono=mycountmap[userno].toString();

    content[userNoStr][todono]={"todo":mytodo.toString(),"time":mytime.toString()};


    try {
        fs.writeFileSync("data.json", JSON.stringify(content, null, 2), 'utf8'); // Beautify with 2-space indentation
        console.log('File updated successfully!');
      } 
    catch (err) {
        console.error('post: Error writing to the file:', err);
      }
    
    res.send(content[userNoStr][todono]);
})



// this route allows us to edit a todo , we have to specifiy the userno , todono to edit
// also the new todo and new time
// we just edit the content and then send it back
app.put("/edit",function(req,res){
    let usernoE=req.body.usernoE;
    let todonoE=req.body.todonoE;
    let todoE=req.body.todoE;
    let timeE=req.body.timeE;

    const data = fs.readFileSync("data.json","utf-8");
    const content=JSON.parse(data);

    content[usernoE][todonoE]={"todo":todoE.toString(),"time":timeE.toString()};

    try {
        fs.writeFileSync("data.json", JSON.stringify(content, null, 2), 'utf8'); // Beautify with 2-space indentation
        console.log('File updated successfully!');
      } 
    catch (err) {
        console.error('put: Error writing to the file:', err);
      }

      res.send(content[usernoE][todonoE]);




})


// this route allows us to delete a particular todo of a user
// we give the userno and todono in the body
// delete the content of that todo
// then we have to take care of numbering of indexing of the todos so we do that

// so we first delete the todo
// then create a new object 
// add the remaining todos into that with proper numbering
// then we delete the user completely
// then we set the user to the object we created
// then write back into our file



app.delete("/delTODO",function(req,res){
    let usernoD=req.body.usernoD;
    let todonoD=req.body.todonoD;

    const data = fs.readFileSync("data.json","utf-8");
    const content=JSON.parse(data);


    delete content[usernoD][todonoD];

    const updatedUser={};
    Object.values(content[usernoD]).forEach((value,index) => {
        updatedUser[index+1]=value;
        
    });


    delete content[usernoD];

    content[usernoD]=updatedUser;

    try {
        fs.writeFileSync("data.json", JSON.stringify(content, null, 2), 'utf8'); // Beautify with 2-space indentation
        console.log('File updated successfully!');
      } 
    catch (err) {
        console.error('delete :Error writing to the file:', err);
    }

    res.send(content[usernoD]);



})


app.listen(3000,"0.0.0.0",() => {
    console.log('Server running on http://0.0.0.0:3000');
  });



