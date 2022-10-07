const mongoose = require("mongoose");
const UserSchema= new mongoose.Schema({
    email:{
        type:String,
        max:255,
        unique:true
    },
    name:{
        type:String,
        max:225
    },
    password:{
        type:String,
        max:225
    },
    repo:
      [

          {type:mongoose.Schema.Types.ObjectId, ref:'Repo', default:null}
      ] 

       
    
    
})
const User=mongoose.model('User',UserSchema)
module.exports={User}