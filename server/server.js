const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()
const quoteRouter = require('./routers/quote')

app.use(express.json())
app.use(cors())
app.use("/quote",quoteRouter)


app.listen(process.env.PORT,(err)=>{
  if (err){
    console.log(err)
  }else{
    console.log(`Server is running on port ${process.env.PORT}`)
  }
})
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URI,(err)=>{
  if (err) {
    console.log(err)
    return false
  }
  console.log('Connected to DB')
})