const zod=require('zod');

const bookingvalidation=zod.object({
  
  firstname: zod.string(),
	lastname: zod.string(),
  email:zod.string().email(),
  phone:zod.number(),
  from:zod.string(),
  to:zod.string(),
  date:zod.date(),
  passport:zod.number(),
  gender:zod.string(),
  classtype:zod.string(),
});


const adminvalidate=zod.object({
  username:zod.string().email(),
  password:zod.string().length(8)
})




module.exports={
  bookingvalidation:bookingvalidation,
  adminvalidate:adminvalidate
}