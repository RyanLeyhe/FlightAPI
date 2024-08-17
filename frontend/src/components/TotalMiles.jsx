import React from 'react';

const TotalMiles = ({ totalMiles, totalAvgFare }) => {
  // console.log('TotalMiles - totalMiles:', totalMiles);
  // console.log('TotalMiles - totalAvgFare:', totalAvgFare);

  return (
    <div className="p-4 border rounded-md shadow-md mb-4 max-w-xl mx-auto">
      <h2 className="text-xl mb-4">Total Estimated Miles:</h2>
      <input
        type="text"
        value={totalMiles}
        readOnly
        className="border rounded-md p-2 w-full bg-gray-100"
      />
      <h2 className="text-xl mt-4 mb-4">Total Average Fare:</h2>
      <input
        type="text"
        value={totalAvgFare}
        readOnly
        className="border rounded-md p-2 w-full bg-gray-100"
      />
    </div>
  );
};

export default TotalMiles;
