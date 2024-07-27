const router = require('express').Router()
const simpleApiController = require('../controllers/simpleApiController')

router.get("/",simpleApiController.simpleGet)
router.post("/",simpleApiController.simplePost)


//  Add missing routes


module.exports = router