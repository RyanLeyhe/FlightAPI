const express = require('express');
const router = express.Router();
const {getAirportCodes} = require('../controllers/airports.controller.js')

router.get('/codes', getAirportCodes);

module.exports = router;
