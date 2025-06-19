require('dotenv').config()

const express = require("express")


const mongoose = require("mongoose")


const app = express()

app.use(express.json())


const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")


// Add route skeleton for user login, 
// signup, purchase a course, sees all courses,sees the purchased courses 
// we use routing 
// so that all routes starting with user are passed to userRouter
// and similarly all routes with course are passed to courseRouter


app.use("/user",userRouter)
app.use("/course",courseRouter)
app.use("/admin",adminRouter)





// Add routes for admin login, admin signup, create a course, delete a course, add course content.



async function main(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL)
    app.listen(3000,"",()=>{
    console.log("server running on http://localhost:3000")
})
}

main();


