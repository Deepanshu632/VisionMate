import mongoose from "mongoose";
import { UNSAFE_getTurboStreamSingleFetchDataStrategy } from "react-router-dom";

const requestSchema = new mongoose.Schema({
    Student : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required :true,
    },
    Volunteer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    subject : {
        type : String,
        required : true,
    },
    examDate :{
       type : Date,
       required : true,
    },
    location : {
        type :String,
    },
    status : {
        type : String ,
        enum : ["pending" , "accepted" , "declined" , "completed" ],
        required :  true,
    },
    message : {type : String},
}, { timestamps: true });

export default mongoose.model("Request" , requestSchema )