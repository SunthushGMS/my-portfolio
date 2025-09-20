const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

//signup route
router.post("/signup", async(req, res)=>{

    const { username, email, password, role} = req.body;

    try{
        //check for existing user
        const existingUser = await User.findOne({email});

        if(existingUser){

            return res.status(400).json("User already exists.");

        }

        //hash passoword
        const hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const newUser = new User({

            username,
            email,
            password: hashedPassword,
            role,
        });

        await newUser.save();
        res.status(201).json("User registered successfully!");
    }catch(err){
        res.status(500).json("Signup Failed: " + err.message);
    }
});

//login route
router.post("/login", async(req, res)=>{

    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json("User not found");

        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json("Incorrect Password");
        }

        res.status(200).json({message: "Login Successfull", user});
    }catch(err){
        res.status(500).json("Login Failed" + err.message);
    }
});

//update user profile

router.put("/:id", async( req, res)=>{

    try{
        const { email, password } = req.body;
        const updateData = { email };
        if(password) {

            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }
        await User.findByIdAndUpdate(req.params.id, updateData);
        res.send("User updated");
    }catch(err){

        res.status(400).send(err.message);
    }
});

module.exports = router;