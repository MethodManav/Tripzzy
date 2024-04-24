const mongoose = require('mongoose');



mongoose.connect("YOUR MONGO URL")




const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    phone:{
        type:Number,
        require:true,
    },
    flight_ticket:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Flight_Ticket'
       
    }],
    hotel_ticket:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'HoteTicket',
    }]
    
    
});


const flightsbookingchema=new mongoose.Schema({
     from:{
        type:String,
        require:true,
    },
    to:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        require:true,
    },
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    gender:{
        type:String,
        require:true
    },
    passport:{
        type:Number,
        require:true,
    },
    classtype:{
        type:String,
        require:true,
    },
    
});



const adminschema=new mongoose.Schema({
        username:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        }


 });

 const feedbackschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
 })  

 const hotelschema= new mongoose.Schema({
    hotelId:{
        type:String,
        require:true
    },

    hotel_name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true
    },
    rating:{
        type:Number,
        require:true,
    },
    address:{
        type:String,
        require:true
    }

 });

 const Flightschema= new mongoose.Schema({
    
    flight_id:{
        type:Number,
        require:true
    },

    flightname:{
        type:String,
        require:true,
    },
    from:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true
    },
    to:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        require:true,
    },
    img:{
        type:Buffer,
    }

 })

 const hotelbookingschema=new mongoose.Schema({

    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        require:true,
    },
    checkoutdate:{
    
        type:Date,
        require:true,
    },
    room:{
        type:String,
        require:true,
    },
    id_proof:{
        type:Number,
        require:true,
    }
})



 
 









const User = mongoose.model('User', userSchema);
const Flight_Ticket=mongoose.model('Flight_Ticket',flightsbookingchema);
const admin=mongoose.model('admin',adminschema)
const Feedback=mongoose.model("Feedback",feedbackschema);
const Hotel = mongoose.model('Hotel',hotelschema);
const Flight=mongoose.model('Flight',Flightschema);
const HoteTicket=mongoose.model("HotelTicket",hotelbookingschema);





module.exports = {
	User,
    Flight_Ticket,
    admin,
    Feedback,
    Hotel,
    Flight,
    HoteTicket,
    
};