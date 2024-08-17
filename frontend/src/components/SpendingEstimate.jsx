import React from 'react';

const SpendingEstimate = ({ amountToSpend }) => {
  // Provide a default value if amountToSpend is undefined or null
  const displayAmountToSpend = amountToSpend !== undefined && amountToSpend !== null ? `$${amountToSpend}` : 0;

  return (
    <div className="p-4 border rounded-md shadow-md mb-4 max-w-xl mx-auto">
      <h2 className="text-xl mb-4">Estimated Spending Required for Free Travel:</h2>
        <div className="flex items-center gap-4 mt-4">
          <input
            type="text"
            value={displayAmountToSpend}
            readOnly
            className="border rounded-md p-2 w-2/3 bg-gray-100"
          />
        </div>
      </div>
  );
};

export default SpendingEstimate;