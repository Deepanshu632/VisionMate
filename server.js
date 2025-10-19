import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authroute from "./routes/authroute.js"
dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use(cors());

app.use("authRoute" ,authroute );

app.get("/" , (req,res) => {
    res.send(" checking route")
})

app.listen(8080 , (req,res) => {
    console.log(" app is listening on port 8080");
});