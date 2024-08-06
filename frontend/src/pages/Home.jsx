import React, { useState } from 'react';
import Title from '../components/Title.jsx';
import {TravelCard, TotalMiles} from '../components/TravelCard.jsx';
// import TotalMiles from '../components/TravelCard.jsx';
import CardSelector from '../components/CardSelector.jsx';
import SpendingEstimate from '../components/SpendingEstimate.jsx';

const App = () => {
  const [instances, setInstances] = useState([0]); // Manage instances of travel input
  const [totalMiles, setTotalMiles] = useState('');
  const [spending, setSpending] = useState('');

  const handleAddInstance = () => {
    setInstances([...instances, instances.length]);
  };

  const handleSelectCard = (card) => {
    // Handle card selection
  };

  return (
    <div className="p-8">
      <Title />
      {instances.map((_, index) => (
        <TravelCard key={index} onAddInstance={handleAddInstance} setTotalMiles={setTotalMiles} />
      ))}
      <CardSelector onSelectCard={handleSelectCard} />
      <SpendingEstimate spending={spending} />
    </div>
  );
};

export default App;
