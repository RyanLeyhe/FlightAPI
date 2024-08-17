const Flight = require('../models/FlightModel');

exports.getMarketMilesFlown = async (req, res) => {
  const { from, to } = req.body; 
  
  try {
    const flightData = await Flight.find({ ORIGIN: from, DEST: to }).limit(1).exec();

    if (flightData.length > 0) {
      const marketMilesFlown = flightData[0].MARKET_MILES_FLOWN;
      res.json({ MARKET_MILES_FLOWN: marketMilesFlown });
    } else {
      res.status(404).json({ message: 'Flight not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
