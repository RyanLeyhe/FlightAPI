const Airport = require('../models/AirportModel.js')

const getAirportCodes = async (req, res) => {
    try {
        const airports = await Airport.distinct('CODE');
        res.json(airports);
      } catch (err) {
        console.error('Error:', err); // Debugging log
        res.status(500).json({ error: 'Failed to fetch airport codes' });
      }
}

module.exports = {getAirportCodes}