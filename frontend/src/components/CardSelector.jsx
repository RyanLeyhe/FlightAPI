import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3001'; // LOCAL DEV
const API_BASE_URL = 'http://18.188.12.168:3000'; // EC2

const CardSelector = ({ onSpendingRequiredChange, totalAvgFare }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/cards/cards`);
        const cardData = response.data;
        setCards(cardData);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCards();
  }, []);

  const handleSelectCard = async (cardId) => {
    try {
      const card = cards.find(c => c._id === cardId);

      if (!card) {
        console.error('Card not found');
        return;
      }

      const travelCost = totalAvgFare; 
      const pointsRequired = travelCost / card.POINT_TO_USD;
      const spendingRequired = pointsRequired / card.RATE[1];

      onSpendingRequiredChange(spendingRequired);
    } catch (error) {
      console.error('Error calculating spending required:', error);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md mb-4 max-w-xl mx-auto">
      <h2 className="text-xl mb-4">Choose your card:</h2>
      <select onChange={(e) => handleSelectCard(e.target.value)} className="border rounded-md p-2 w-full">
        <option value="">Select a card</option>
        {cards.map(card => (
          <option key={card._id} value={card._id}>
            {card.CARD}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CardSelector;
