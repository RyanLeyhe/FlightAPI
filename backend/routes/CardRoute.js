const express = require('express');
const router = express.Router();
const {getCards} = require('../controllers/card.controller.js');

router.get('/cards', getCards);

module.exports = router;