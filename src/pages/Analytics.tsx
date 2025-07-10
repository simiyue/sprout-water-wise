
import React from 'react';
import AdvancedAnalytics from '@/components/AdvancedAnalytics';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Advanced Analytics</h1>
        <p className="text-gray-600">Detailed insights and performance metrics</p>
      </div>
      <AdvancedAnalytics />
    </div>
  );
};

export default Analytics;
