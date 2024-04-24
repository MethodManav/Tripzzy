const express=require('express')

const { Flight_Ticket, User, HoteTicket } = require('../databse/db');
const { adminmiddleware } = require('../middleware');
const router = express.Router();

router.use(express.json());



router.post("/flightbooking",async(req,res)=>{
  
  const book= await Flight_Ticket.create({
          
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        from:req.body.from,
        to:req.body.to,
        date:req.body.date,
        gender:req.body.gender,
        passport:req.body.passport,
        classtype:req.body.classtype,
  })
  const user_id=req.body.user_id
  const flightticket_Id=book._id;
  console.log(user_id);
  console.log(flightticket_Id);
  const userticket=await User.updateOne({
    _id:user_id
  },{
    "$push":{
      flight_ticket: flightticket_Id
    }
  })

  res.status(200).json({
    userticket,
  })

})

router.get("/totalflightbook", adminmiddleware, async(req,res)=>{
  const result= await Flight_Ticket.find({})
  
  res.json({
    data:result
  })
})

router.get("/myticket", async (req, res) => {
  try {
      const user_id = req.headers.user_id;
      const user1 = await User.findOne({ _id: user_id });
      console.log(user1);
      
      if (!user1) {
          return res.status(404).json({ message: "User not found" });
      }

      const myticket = await Flight_Ticket.find({
          _id: { "$in": user1.flight_ticket }
      });
      console.log(myticket);

      res.json({ myticket }); // Send the response once, with the myticket data
  } catch (error) {
     
  }
});

router.post("/hotelbooking",async(req,res)=>{
  
  const book= await HoteTicket.create({
          
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        id_proof:req.body.id_proof,
        room:req.body.room,
        date:req.body.date,
        checkoutdate:req.body.checkoutdate,

  })
  const user_id=req.body.user_id
  const hotelbook_id=book._id
  console.log(user_id);
  console.log(hotelbook_id);
  const userticket=await User.updateOne({
    _id:user_id
  },{
    "$push":{
      hotel_ticket: hotelbook_id
    }
  })

  res.status(200).json({
    userticket:userticket
  })

})


 
module.exports = router;