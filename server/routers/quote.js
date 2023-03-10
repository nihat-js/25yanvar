const express = require("express");
const router = express.Router()

const quoteController = require('../controllers/quoteController')

router.get("/",quoteController.get)
router.get("/:id",quoteController.getById)
router.post("/",quoteController.add)
router.delete("/" , quoteController.deleteById)

module.exports = router