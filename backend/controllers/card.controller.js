const Cards = require('../models/CardModel.js')

const getCards = async (req, res) => {
    try {
        const cards = await Cards.find().exec();
        res.json(cards);
    } catch (err) {
        console.error('Error:', err); // Debugging log
        res.status(500).json({ error: 'Failed to fetch card names' });
    }
}

module.exports = {getCards}