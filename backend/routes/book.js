const express=require('express')
const router = express.Router();
const { bookingvalidation } = require('../validation');
const { Flight_Ticket, User } = require('../databse/db');
const { adminmiddleware } = require('../middleware');

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

 
module.exports = router;