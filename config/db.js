import mongoose from "mongoose";

const connectDB = async() => {
     try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB conected");
     } catch (error) {
        console.log("DB conection failed");
         process.exit(1);
     }
}

export default connectDB;