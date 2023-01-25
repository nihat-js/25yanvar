const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const quoteSchema = new Schema({
  text: { type: String, required : true },
  author: { type: String, required : true },
  authorId : {type : Number  }

})


const Quote = mongoose.model('Quote', quoteSchema)  
module.exports = Quote