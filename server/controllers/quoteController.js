const Quote = require('../models/quote')

async function get (req,res){
  const result = await Quote.find({})
  if (!result){
    res.status(404).json({message: "Quote not found" })
    return false
  }
  res.status(200).json(result)
}

async function getById (req,res){
  if (!req.body.text || !req.body.author ){
    res.status(404).json({message: " Not found "})
    return false
  }
  const quote = new Quote({
    text: req.body.text,
    author: req.body.author
  })
  const result = await quote.save()
  if (!result){
    res.status(404).json({message: "Quote not found" })
    return false
  }
  res.status(200).json(result)
}
  
async function add (req,res ) {
  console.log('ff')
  if (!req.body.text ||!req.body.author ){
    res.status(404).json({message: " Not found "})
    return false
  }
  const quote = new Quote({
    text: req.body.text,
    author : req.body.author
  })
  const result = await quote.save()
  if (!result){
    res.status(404).json({message: "Couldnot save it " })
    return false
  }
  res.status(200).json(result)
}

async function deleteById (req,res){
  if (!req.body.id ){
    res.status(404).json({message: " Not found "})
    return false
  }
  const result = await Quote.findByIdAndDelete(req.body.id)
  if (!result){
    res.status(404).json({message: "Quote not found" })
    return false
  }
  res.status(200).json(result)
}

module.exports = {
  get,
  getById,
  add,
  deleteById
}