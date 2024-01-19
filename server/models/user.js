const mongoose =require('mongoose')
const form = require('./UserProfile')


const userschema=new mongoose.Schema({
   username:{
    type:String
   },
    email:{
        type: String
    },
    password:{
        type: String
    },
    formulaire :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "form"
        
    },
    
    role: { 
    type: String,
    enum:["admin","user","coach"] },
})

module.exports = mongoose.model("user", userschema)