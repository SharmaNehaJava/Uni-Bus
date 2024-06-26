const mongoose =require("mongoose");
const { number } = require("zod");
require('dotenv').config();

// Rest of your code...


mongoose.connect(process.env.URI)
.then(() => console.log("Connected to database"))
.catch((err) => console.log(err));

const userSchema=new mongoose.Schema({
    username:{ 
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true
    }
})

const walletSchema=new mongoose.Schema({
    value:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const User=mongoose.model("user",userSchema);
const Wallet=mongoose.model("wallet",walletSchema);

module.exports={
    User,Wallet
}
