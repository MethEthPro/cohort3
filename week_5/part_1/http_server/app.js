const express = require("express");
const app = express();

app.use(express.json());


// when the user passes the inputs in a json form in body
app.get("/sum", function(req, res) {
    const a = req.body.a;
    const b = req.body.b;
    res.json({
        ans: a + b
    })

});


// when the user passes the input in form of query 
// we need to parse it into Number
app.get("/multiply", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a * b
    })
    
});

app.get("/divide", function(req, res) {
    const a = req.body.a;
    const b = req.body.b;
    res.json({
        ans: a / b
    })
    

});


// if the user has to specify the inputs as 
// http:localhost:3000/subtract/20/10
// to get 20-10=10

// we need to parse it into Number
app.get("/subtract/:a/:b", function(req, res) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({
        ans: a - b
    })

});



app.listen(3000,"0.0.0.0",() => {
    console.log('Server running on http://0.0.0.0:3000');
  });