const mongoose = require('mongoose');
const Schema = mongoose.Schema

const airportSchema = new Schema({
  AIRPORT: String,
  CODE: String
});

const Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;
