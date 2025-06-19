const {Router} = require("express")
const courseRouter = Router()

const {CourseModel} = require("../db")
const {PurchaseModel} = require("../db")

const {userAuthMiddleware} = require("../middlewares/userAuth")


// all courses preview
// even a guest user can visit this page
courseRouter.get("/preview",async(req,res)=>{
    const courses = await CourseModel.find().select("-adminId");
    res.json({courses})
})



// user want to purchase a course, and just for 
// assumption if the user hits this page
// and the course exists and the user does not already own it
// then we conside it as a purchase and add it to user purchases

// so user should be signed in to reach this page


// middleware keeps check of user being signed in
courseRouter.use(userAuthMiddleware);


courseRouter.post("/purchase",async(req,res)=>{
    const userId = req.userId;
    const courseId = req.body.courseId;

    // check if the course exists
    const courseExists = await CourseModel.findOne({
        _id:courseId
    })

    if(courseExists){
        // check if user already owns it

        try{
            const userOwns = await PurchaseModel.findOne({
                courseId:courseId,
                userId:userId
                
            })
            if(!userOwns){
                await PurchaseModel.create({
                    courseId:courseId,
                    userId:userId
                })
                res.json({
                    message:"course purchased successfully"
                })
            }
            else{
                res.status(409).json({
                    message:"user already own the course"
                })
            }
        }
        catch(e){
            res.status(404).json({
                message:"Oops something went wrong"
            })
        }
    }
})


module.exports = {
    courseRouter:courseRouter
}
