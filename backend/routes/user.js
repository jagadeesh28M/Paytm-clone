const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const JWT_SECRECT = require('../config');
const { User } = require('../db/db');
const router = express.Router();

const signupSchema = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string(),
});

router.post('/signup',async(req,res)=>{
    const body = req.body;
    const response = signupSchema.safeParse(body);
    if(!response.success){
        return res.status(411).json({
            msg : "Email already taken / Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username : body.username
    })
    if(existingUser){
        return res.status(409).json({
            msg: "Email already taken"
        });
    }
    const user = await User.create(body);
    const token = jwt.sign({
        userId : user._id
    },JWT_SECRECT)
    res.json({
        message: "User created successfully",
	    token: token 
    })
})

module.exports = router;