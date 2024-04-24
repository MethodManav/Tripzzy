
const express = require('express');
const router = express.Router();
const zod = require("zod");
const { User, admin } = require("../databse/db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


router.use(express.json())

const signupBody = zod.object({
    username: zod.string().email(),
	firstname: zod.string(),
	lastname: zod.string(),
	password: zod.string(),
    phone: zod.string().length(10)
    
  
})
let count=0;

router.get("/" ,async(req,res) =>{
   
    const Administhere= await admin.findOne({
        username:req.headers.username
    })
    if(Administhere){
        count=count
        res.json({
            count:count
        })
    }else{
    count+=1
    res.json({
        count:count
    
})
    }});
    


router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(404).json({
            message: "Email already taken / Incorrect inputs"
           
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })
    

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password:req.body.password,
        phone:req.body.phone,
        
       })
    const userId = user._id;
    const firstname=user.firstname;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        
        token: token,
        userId,
        firstname,
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
    });
    console.log(user);
         if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
        const userId = user._id;
        const firstname=user.firstname
  
        res.json({
            token: token,
            User_ID:userId,
            Name:firstname,
            
        })
        return;
    
    }
    res.status(411).json({
        message: "Error while logging in"
    })
})





module.exports = router;