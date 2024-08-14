import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const API_BASE_URL = 'http://localhost:3001'; // LOCAL DEV
// const API_BASE_URL = 'http://18.188.12.168:3000'; // EC2

const TravelCard = ({ setTotalMiles, setTotalAvgFare }) => {
  const [travelInstances, setTravelInstances] = useState([{ from: '', to: '' }]);
  const [originOptions, setOriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);
  const [totalMilesLocal, setTotalMilesLocal] = useState(0);
  const [localAvgFare, setLocalAvgFare] = useState(0);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/airports/codes`);
        const codes = response.data;
        const options = codes.map(code => ({
          value: code,
          label: code
        }));
        setOriginOptions(options);
        setDestinationOptions(options);
      } catch (error) {
        console.error('Error fetching airport codes:', error);
      }
    };

    fetchAirports();
  }, []);

  const fetchMarketMiles = async (from, to) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/market-miles/market-miles`, { from, to });
      const { MARKET_MILES_FLOWN } = response.data;
      return MARKET_MILES_FLOWN || 0;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Invalid flight');
      } else {
        console.error('Error fetching market miles:', error.message);
      }
      return 0;
    }
  };

  const fetchAvgFare = async (from, to) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/avg-fare/avg-fare`, { from, to });
      const { avgFare } = response.data
      console.log("fetchAvgFare: ", avgFare)
      return avgFare || 0
    } catch (error) {
      console.error('Error fetching avg fare:', error.message);
    }
  };

  const handleAddInstance = () => {
    setTravelInstances([...travelInstances, { from: '', to: '' }]);
  };

  const handleDeleteInstance = async (index) => {
    if (index > 0) {
      const { from, to } = travelInstances[index];

      const miles = await fetchMarketMiles(from, to);
      const avgFare = await fetchAvgFare(from, to);

      setTotalMiles(prevMiles => prevMiles - miles);
      setTotalMilesLocal(prevMiles => prevMiles - miles);
      // console.log("setting totalAvgFare (handleDeleteInstance):", totalAvgFare)
      setTotalAvgFare(prevAvgFare => prevAvgFare - avgFare);

      setTravelInstances(travelInstances.filter((_, i) => i !== index));
    }
  };

  const handleChange = async (index, field, value) => {
    const newInstances = [...travelInstances];
    newInstances[index][field] = value;
    setTravelInstances(newInstances);

    if (field === 'from' || field === 'to') {
      const { from, to } = newInstances[index];
      if (from && to) {
        const miles = await fetchMarketMiles(from, to);
        const avgFare = await fetchAvgFare(from, to);

        const prevMiles = newInstances[index].miles || 0;
        const prevAvgFare = newInstances[index].avgFare || 0;

        const newTotalMiles = totalMilesLocal - prevMiles + miles;
        const newTotalAvgFare = localAvgFare - prevAvgFare + avgFare;

        // console.log('Setting newTotalAvgFare:', newTotalAvgFare); // Debugging line
        // console.log('Setting newTotalMiles:', newTotalMiles); // Debugging line

        setTotalMiles(newTotalMiles);
        setTotalMilesLocal(newTotalMiles);
        setLocalAvgFare(newTotalAvgFare); // Update local state
        setTotalAvgFare(newTotalAvgFare); // Update parent component state

        newInstances[index].miles = miles;
        newInstances[index].avgFare = avgFare;
      }
    }
  };
  
  return (
    <div className="p-4 border rounded-md shadow-md mb-4 max-w-xl mx-auto">
      <h2 className="text-xl mb-4">Enter your interstate travel:</h2>
      <div className="flex flex-col gap-4">
        {travelInstances.map((instance, index) => (
          <div key={index} className="flex items-center flex-wrap gap-2">
            <Select
              placeholder="From"
              options={originOptions}
              onChange={(selected) => handleChange(index, 'from', selected?.value || '')}
              className="flex-grow min-w-0 max-w-xxsm"
            />
            <span className="mx-2">to</span>
            <Select
              placeholder="To"
              options={destinationOptions}
              onChange={(selected) => handleChange(index, 'to', selected?.value || '')}
              className="flex-grow min-w-0 max-w-xxsm"
            />
            {index > 0 && (
              <button
                onClick={() => handleDeleteInstance(index)}
                className="bg-red-500 text-white rounded-md p-2 max-w-xs"
              >
                Delete
              </button>
            )}
          </div>
        ))}
        <button onClick={handleAddInstance} className="bg-blue-500 text-white rounded-md p-2 mt-4 max-w-xs">
          Add Another
        </button>
      </div>
    </div>
  );
};

export default TravelCard; // Export only TravelCard
