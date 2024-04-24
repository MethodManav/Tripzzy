
const express = require('express');
const userRouter = require("./user");
const adminrouter=require("./admin")
const feedbackrouter=require("./feedback")
const bookrouter=require('./book')


const router = express.Router();

router.use("/user", userRouter);
router.use("/booking",bookrouter);
router.use("/admin",adminrouter)
router.use("/feedback",feedbackrouter)


module.exports = router;