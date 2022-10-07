const mongoose=require('mongoose')
const RepoSchema= new mongoose.Schema({
    RepoName:{
        type:String,
        require:true
    },
    createdate:{type: Date, default: Date.now, 
        required: true 
    },
    description:[{timestamp:{type: Date, default: Date.now,required:true},description:{type:String},commit:{type:String}}],


    RepoOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'}
    

})
const Repo=mongoose.model('Repo',RepoSchema)
module.exports={Repo}