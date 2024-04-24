const express= require("express");
const router=express.Router();
const { adminvalidate } = require('../validation');

const { admin, Hotel, User, Flight } = require('../databse/db');
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const { route } = require("./user");

router.use(express.json());


router.post("/new",async(req,res)=>{
  const {success}= adminvalidate.safeParse(req.body)

   if(!success){
    return res.status(404).json({
      message: "Email already taken/Incorrect inputs"
  })
     }
      const existingUser = await admin.findOne({
            username: req.body.username
        })

if (existingUser) {
    return res.status(411).json({
        message: "Email already taken/Incorrect inputs"
    })
}
const newadmin= admin.create({
  username:req.body.username,
  password:req.body.password
})
const AdminId = newadmin._id;

const token = jwt.sign({
  AdminId
}, JWT_SECRET);

res.json({
    message: "Admin created successfully",
    token: token
})
})

router.post("/signup",async (req,res)=>{
  const {success}= adminvalidate.safeParse(req.body)

   if(!success){
    return res.status(411).json({
      message: "Incorrect inputs"
  })
     }
      const existingUser = await admin.findOne({
            username: req.body.username
        })

        if(!existingUser){
          res.status(411).json({
            message: "You are not a admin"
        })
        }

})

router.post("/create/add/hotel",async(req,res)=>{
  const hotelId=req.body.hotelId;
  const hotel_name=req.body.hotel_name;
  const price=req.body.price;
  const rating=req.body.rating;
  const address=req.body.address;

  const existHotel=await Hotel.findOne({
    hotelId:req.body.hotelId
  })

  if(existHotel){
    res.status(411).json({
      Message:"Hotel Is Already Exists"
    })
  }
  
  await Hotel.create({
    hotelId,
    hotel_name,
    price,
    rating,
    address,
  })

  res.status(200).json({
    mssage:"New  Hotel Added "
  })
})


router.get('/usersnumber',async (req,res)=>{
 
  const coutn= await User.countDocuments({})

    
res.json({
  coutn
})
   
   
})


router.post("/create/add/filght",async(req,res)=>{
  const flight_id=req.body.hotelId;
  const flightname=req.body.hotel_name;
  const from=req.body.from;
  const to=req.body.to
  const price=req.body.price;
  const rating=req.body.rating;
  const date=req.body.date;


  const existflight=await Flight.findOne({
    flight_id:req.body.flight_id
  })

  if(existHotel){
    res.status(411).json({
      Message:"Hotel Is Already Exists"
    })
  }
  
  await Hotel.create({
    flight_id,
    flightname,
    from,
    to,
    price,
    rating,
    date,
    
  })

  res.status(200).json({
    mssage:"New  Flight  Added "
  })
})



module.exports = router;