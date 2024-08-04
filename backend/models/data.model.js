const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DataSchema = new Schema({
    YEAR: { type: Number, required: true },
    QUARTER: { type: Number, required: true },
    ORIGIN_CITY_MARKET_ID: { type: Number, required: true },
    ORIGIN: { type: String, required: true },
    DEST_CITY_MARKET_ID: { type: Number, required: true },
    DEST: { type: String, required: true },
    TK_CARRIER_GROUP: { type: String, required: true },
    PASSENGERS: { type: Number, required: true },
    MARKET_FARE: { type: Number, required: true },
    MARKET_MILES_FLOWN: { type: Number, required: true }
}, { collection: 'DB1B' }); 
  
const Data = mongoose.model('Data', DataSchema);

module.exports = Data;