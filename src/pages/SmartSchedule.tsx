
import React from 'react';
import SmartScheduler from '@/components/SmartScheduler';

const SmartSchedule = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Smart Scheduling</h1>
        <p className="text-gray-600">AI-powered irrigation scheduling and optimization</p>
      </div>
      <SmartScheduler />
    </div>
  );
};

export default SmartSchedule;
