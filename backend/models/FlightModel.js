const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  YEAR: Number,
  QUARTER: Number,
  ORIGIN_CITY_MARKET_ID: Number,
  ORIGIN: String,
  DEST_CITY_MARKET_ID: Number,
  DEST: String,
  TK_CARRIER_GROUP: String,
  PASSENGERS: Number,
  MARKET_FARE: Number,
  MARKET_MILES_FLOWN: Number
});

const Flight = mongoose.model('Flight', flightSchema, 'DB1B'); // 'DB1B' is the collection name

module.exports = Flight;
