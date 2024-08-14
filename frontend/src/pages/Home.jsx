import React, { useState, useEffect } from 'react';
import Title from '../components/Title.jsx';
import TravelCard from '../components/TravelCard.jsx'; // Import only TravelCard
import TotalMiles from '../components/TotalMiles.jsx'; // Import TotalMiles
import CardSelector from '../components/CardSelector.jsx';
import SpendingEstimate from '../components/SpendingEstimate.jsx';

const App = () => {
  const [instances, setInstances] = useState([0]); // Manage instances of travel input
  const [totalMiles, setTotalMiles] = useState(0); // Initialize totalMiles as number
  const [totalAvgFare, setTotalAvgFare] = useState(0); // Initialize totalAvgFare as number
  const [spending, setSpending] = useState('');

  const handleAddInstance = () => {
    setInstances([...instances, instances.length]);
  };

  const handleSelectCard = (card) => {
    // Handle card selection
  };

  // console.log("App - totalAvgFare: ", totalAvgFare)
  // console.log("App - totalMiles: ", totalMiles)

  return (
    <div className="p-8">
      <Title />
      {instances.map((_, index) => (
        <TravelCard key={index} 
         onAddInstance={handleAddInstance} 
         setTotalMiles={setTotalMiles} 
         setTotalAvgFare={setTotalAvgFare}
         />
      ))}
      <TotalMiles totalMiles={totalMiles} totalAvgFare={totalAvgFare} />
      <CardSelector onSelectCard={handleSelectCard} />
      <SpendingEstimate spending={spending} />
    </div>
  );
};

export default App;
