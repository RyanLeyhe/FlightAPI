const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AirportSchema = new Schema({
  AIRPORT: { type: String, required: true },
  CODE: { type: String, required: true }
}, { collection: 'airports' });

const Airport = mongoose.model('Airport', AirportSchema);

module.exports = Airport;
