const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CardSchema = new Schema({
    CARD: { type: String, required: true },
    FEE: { type: Number, required: true },
    RATE: { type: Array, required: true },
    INTRO: { type: Array, required: true },
    POINT_TO_USD: { type: Number, required: true}
}, { collection: 'CreditCards' });

const Cards = mongoose.model('Cards', CardSchema);

module.exports = Cards;
