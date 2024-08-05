import React, { useState } from 'react';

const TravelCard = () => {
  const [travelInstances, setTravelInstances] = useState([{ from: '', to: '' }]);

  const handleAddInstance = () => {
    setTravelInstances([...travelInstances, { from: '', to: '' }]);
  };

  const handleDeleteInstance = (index) => {
    if (index > 0) { // Prevent deletion of the first instance
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
            <input
              type="text"
              placeholder="Origin"
              value={instance.from}
              onChange={(e) => handleChange(index, 'from', e.target.value)}
              className="border rounded-md p-2 flex-grow min-w-0 max-w-xxsm"
            />
            <span className="mx-2">to</span>
            <input
              type="text"
              placeholder="Destination"
              value={instance.to}
              onChange={(e) => handleChange(index, 'to', e.target.value)}
              className="border rounded-md p-2 flex-grow min-w-0 max-w-xxsm"
            />
            {index > 0 && ( // Only show delete button if it's not the first instance
              <button
                onClick={() => handleDeleteInstance(index)}
                className="bg-red-500 text-white rounded-md p-2 max-w-xxsm"
              >
                Delete
              </button>
            )}
          </div>
        ))}
        <button onClick={handleAddInstance} className="bg-blue-500 text-white rounded-md p-2 mt-4 max-w-xxsm">
          Add Another
        </button>
      </div>
    </div>
  );
};

export default TravelCard;
