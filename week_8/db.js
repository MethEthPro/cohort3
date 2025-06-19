

const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


// Define the schema for User, Admin, Course, Purchase

const UserSchema = new Schema({
    name:String,
    email:{type:String, unique:true},
    pass:String

})

const AdminSchema = new Schema({
    name:String,
    email:{type:String, unique:true},
    pass:String

})

const CourseSchema = new Schema({
    title:String,
    price:Number,
    info:String,
    imageURL:String,
    adminId:ObjectId
})

const PurchaseSchema = new Schema({
    courseId:ObjectId,
    userId:ObjectId
})


const UserModel = mongoose.model("user",UserSchema)
const AdminModel = mongoose.model("admin",AdminSchema)
const CourseModel = mongoose.model("course",CourseSchema)
const PurchaseModel = mongoose.model("purchase",PurchaseSchema)


module.exports = {
    UserModel:UserModel,
    AdminModel:AdminModel,
    CourseModel:CourseModel,
    PurchaseModel:PurchaseModel
}