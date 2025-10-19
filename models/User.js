import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true,
    },
    email : {
        type:String,
        required : true,
        unique : true,
    },
    password : {
        type:String,
        required: true,
    },
    role : {
        type:String,
        enum : ["student" , "volunteer" , "Admin"],
        required : true,
    },
    location : {
        type:String,
        required : true,
    },
    subjects : [String],
    verified : {
        type: Boolean,
        default : false,
    },
    rating : {
        type : Number , 
        default : 0,
    }  
} , {timestamps : true});

export default mongoose.model("User" , userSchema );