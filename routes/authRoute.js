import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();
import User from "../models/User.js";

//Register
router.post("/register" , async(req,res) => {
    try {
    const {name , email , password , role} = req.body;
    const existingUser = await User.findOne({email});

    if(existingUser){
        return res.status(400).json({message : "User already Exists"});
    }

    const hashedPasssword = await bcrypt.hash(password , 10);

    const user = await User.create({
        name : name,
        email , email,
        password, hashedPasssword,
        role : role
    }); 
    res.status(201).json({message : "User Created Successfully"});
    } catch (error) {
        console.log(error);
        res.status(201).json({message : error.message});
    }
});

//Login
router.post("/login" , async(req,res) => {
    const {email , password} = req.body;
    const user = await User.findOne({email});

    if(!user){
        return res.status(501).json({message : "User Not Found"});
    }

    const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch){
        return res.status(401).json({message: "Invalid Credentials"});
    }
   
    const token = jwt.sign(
        {id : user._id , role : user.role},
        process.env.JWT_SECRET ,
        {expiresIn : "1d"}
    );
    res.json(token , user);
});

export default router;
