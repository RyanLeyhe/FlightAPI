import React, { useState } from 'react';
import TravelCard from './TravelCard';
import TotalMiles from './TotalMiles';

const ParentComponent = () => {
  const [travelInstances, setTravelInstances] = useState([{ from: '', to: '' }]);
  const [totalMiles, setTotalMiles] = useState(0);

  return (
    <div className="p-4">
      <TravelCard 
        setTotalMiles={setTotalMiles}
        setTravelInstances={setTravelInstances}
      />
      <TotalMiles 
        totalMiles={totalMiles}
      />
    </div>
  );
};

export default ParentComponent;
