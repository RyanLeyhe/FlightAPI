const Flight = require('../models/FlightModel');

exports.getAvgFare = async (req, res) => {
    // get all flights { from, to } 
    // get the sum of all those flights' PASSENGERS * MARKET_FARE
    // get the sum of all those flights' PASSENGERS
    // divide the latter by the former

    const { from, to } = req.body; 

    try {
        // Fetch the flight data based on origin and destination
        const flightData = await Flight.find({ ORIGIN: from, DEST: to }).limit(100).exec();

        if (flightData.length > 0) {

            // Calculate total fare and total passengers
            let totalFare = 0;
            let totalPassengers = 0;

            flightData.forEach(flight => {
                totalFare += flight.MARKET_FARE * flight.PASSENGERS;
                totalPassengers += flight.PASSENGERS;
            });

            // Calculate the average fare
            const avgFare = totalPassengers > 0 ? Math.round(totalFare / totalPassengers) : 0;

            res.status(200).json({ avgFare: avgFare });
            console.log('Average Fare:', avgFare)
        } else {
            res.status(404).json({ message: 'Flight not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};