// basic http servers


function calcSum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=i;
    }
    return sum;
}



const express = require("express");

const app = express();


// the user has to give an input n , which can be given as a query
// http://localhost:3000/?n=30




app.get("/",function (req,res){
    let n=req.query.n;
    let ans = calcSum(n);
    res.send(ans.toString());

})

app.listen(3000,"0.0.0.0",() => {
    console.log('Server running on http://0.0.0.0:3000');
  });


// now as we have our server running on 0.0.0.0
// we can access it not only from the local machines but every device on the same wifi

// we could access it by something like http://192.168.1.7:3000/?n=30

// to get thus ip run ipconfig in the windows command propmt


// to kill a running server press ctrl + C in the vs code terminal
