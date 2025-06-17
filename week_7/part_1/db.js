const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const User = new Schema({
    name: String,
    email: {type: String, unique: true},
    pass: String
});



const Todo = new Schema({
    task: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

module.exports = {
    UserModel:UserModel,
    TodoModel:TodoModel
}