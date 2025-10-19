import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    receiver : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    content : {
        Type : String,
        Required : true,
    },
    timestamp : {
        types : Date , 
        default : Date.now,
    }
});


export default mongoose.model("Message" , messageSchema);

