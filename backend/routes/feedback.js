const express= require("express");
const { Feedback } = require("../databse/db");
const router=express.Router();
const zod=require("zod");
const { adminmiddleware } = require("../middleware");

const feedbackvalidate=zod.object({
      name:zod.string(),
      email:zod.string().email(),
      subject:zod.string(),
      message:zod.string(),

})

router.post("/createfeedback",async(req,res)=>{

      const {success}=feedbackvalidate.safeParse(req.body)
      if(!success){
         res.status(404).json({
          message:"Invalid Data"    
           })
      }

  const feedback = await Feedback.create({
    name:req.body.name,
    email:req.body.email,
    subject:req.body.subject,
    message:req.body.message,

  })
   res.status(200).json({
    feedback
  })

})


router.get("/getFeedback",adminmiddleware, async (req,res)=>{
  const result= await Feedback.find({})
  
  res.json({
    data:result
  })
})


module.exports=router