import React from 'react';

const CardSelector = ({ onSelectCard }) => {
  return (
    <div className="p-4 border rounded-md shadow-md mb-4 max-w-xl mx-auto">
      <h2 className="text-xl mb-4">Choose your card:</h2>
      <select onChange={(e) => onSelectCard(e.target.value)} className="border rounded-md p-2 w-full">
        <option value="">Select a card</option>
        {/* Add options here */}
      </select>
    </div>
  );
};

export default CardSelector;
