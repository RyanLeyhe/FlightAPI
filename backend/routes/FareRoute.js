const express = require('express');
const router = express.Router();
const fareController = require('../controllers/fare.controller');

// Define the route and link to the controller
router.post('/avg-fare', fareController.getAvgFare);

module.exports = router;