const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flight.controller');

// Define the route and link to the controller
router.post('/market-miles', flightController.getMarketMilesFlown);

module.exports = router;
