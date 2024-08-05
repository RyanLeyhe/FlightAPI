import React from 'react';

const SpendingEstimate = ({ totalMiles, amountToSpend }) => {
  // Provide a default value if amountToSpend is undefined or null
  const displayAmountToSpend = amountToSpend !== undefined && amountToSpend !== null ? `$${amountToSpend}` : '';

  return (
    <div className="p-4 border rounded-md shadow-md mb-4 max-w-xl mx-auto">
      <h2 className="text-xl mb-4">Estimated Spending</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <label className="w-1/3 text-lg">Miles to Travel:</label>
          <input
            type="text"
            value={totalMiles || ''} // Default to empty string if totalMiles is undefined or null
            readOnly
            className="border rounded-md p-2 w-2/3 bg-gray-100"
          />
        </div>
        <div className="flex items-center gap-4 mt-4">
          <label className="w-1/3 text-lg">Amount Needed to Spend:</label>
          <input
            type="text"
            value={displayAmountToSpend}
            readOnly
            className="border rounded-md p-2 w-2/3 bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default SpendingEstimate;