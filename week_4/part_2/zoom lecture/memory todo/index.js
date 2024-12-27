const express = require('express')
const app = express()


// req stands for request , it represents the HTTP request made by the client to the server.
// res stands for response , it represents the HTTP response that the server sends back to the client.

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/add-todo', function (req, res) {
    res.json({
        "id":1,
        "task":"mytask"
    })
  })

app.post('/sendd',function (req,res) {
    res.send("<b>blabla</b>")
    
})  

app.listen(3000)  //this is our port