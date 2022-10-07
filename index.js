// Importing required package
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
var indexRouter = require('./routes/routers');

const dotenv=require('dotenv');
//const router = require('./routes/app');
dotenv.config();
const app=express();
 app.use(express.json())
 app.use(cors())
 //router
// app.use('/',router)
app.use('/',indexRouter);

 //MongoDB url
 const URI=process.env.DB_URL
 
 
 mongoose.connect(URI).then(()=>{
     app.listen(process.env.PORT || 4050,()=>{
         console.log(`Server is running on ${process.env.PORT}`)
     })
 }).catch((error)=>{
     console.log(error)
 })