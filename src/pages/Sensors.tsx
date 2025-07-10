
import React from 'react';
import SensorDashboard from '@/components/SensorDashboard';

const Sensors = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sensor Monitoring</h1>
        <p className="text-gray-600">Real-time monitoring of field sensors and environmental conditions</p>
      </div>
      <SensorDashboard />
    </div>
  );
};

export default Sensors;
