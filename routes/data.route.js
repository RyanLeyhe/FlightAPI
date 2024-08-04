const express = require("express")
const router = express.Router();
const {getDataById} = require('../controllers/data.controller.js')

router.get('/:id', getDataById)

module.exports = router;