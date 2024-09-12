const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const {JWT_SECRECT} = require('../config');
const { User, Account } = require('../db/db');
const { authMiddleware } = require('../middleware');
const router = express.Router();

const signupSchema = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string(),
});

const signinSchema = zod.object({
    username : zod.string().email(),
    password: zod.string()
})

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

    await Account.create({
        userId : user._id,
        balance: 1 + Math.random()*10000
    })

    const token = jwt.sign({
        userId : user._id
    },JWT_SECRECT)
    res.json({
        message: "User created successfully",
	    token: token 
    })
})

router.post('/signin',async(req,res)=>{
    const body = req.body;
    const {success} = signinSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }
    const user = await User.findOne({
        username : body.username,
        password: body.password
    })
    if(user){
        const token = jwt.sign({
            userId : user._id,
        },JWT_SECRECT);
        return res.json({
            token : token
        })
    }
    res.status(411).json({
        message: "Error while logging in"
    })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})


router.put('/',authMiddleware,async(req,res)=>{
    const body = req.body;
    const {success} = updateBody.safeParse(body);
    if(!success){
        return res.status(200).json({
            msg : "Error while uupdating information"
        })
    }
    const update = await User.update({
        _id: req.userId
    },req.body)
    res.json({})

})

router.get('/bulk',async(req,res)=>{
    const filter = req.query.filter || "";
    const user = await User.find({
        $or:[{
            firstname :{
                "$regex" : filter
            }
        },{
            lastname:{
                "$regex" : filter
            }
        }]
    })

    res.json({
        user : User.map(user =>({
            username : User.username,
            firstname : User.firstname,
            lastname : User.lastname,
        }))
    })
})

module.exports = router;