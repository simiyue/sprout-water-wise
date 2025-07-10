
import React from 'react';
import WaterUsageChart from '@/components/WaterUsageChart';

const Usage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Water Usage</h1>
        <p className="text-gray-600">Monitor and analyze water consumption patterns</p>
      </div>
      <WaterUsageChart />
    </div>
  );
};

export default Usage;
