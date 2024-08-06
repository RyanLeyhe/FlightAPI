import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const API_BASE_URL = 'http://18.188.12.168:3000';

const TravelCard = () => {
  const [travelInstances, setTravelInstances] = useState([{ from: '', to: '' }]);
  const [originOptions, setOriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        // Fetch all unique codes
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

  const handleAddInstance = () => {
    setTravelInstances([...travelInstances, { from: '', to: '' }]);
  };

  const handleDeleteInstance = (index) => {
    if (index > 0) {
      setTravelInstances(travelInstances.filter((_, i) => i !== index));
    }
  };

  const handleChange = (index, field, value) => {
    const newInstances = [...travelInstances];
    newInstances[index][field] = value;
    setTravelInstances(newInstances);
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
            {index > 0 && ( // Only show delete button if it's not the first instance
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

export default TravelCard;
