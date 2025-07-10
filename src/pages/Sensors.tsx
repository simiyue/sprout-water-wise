
import React from 'react';
import SensorDashboard from '@/components/SensorDashboard';
import HardwareControls from '@/components/HardwareControls';
import ESP32Dashboard from '@/components/ESP32Dashboard';

const Sensors = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Hardware Monitoring</h1>
        <p className="text-gray-600">ESP32 system monitoring and hardware sensor management</p>
      </div>
      
      <ESP32Dashboard />
      <SensorDashboard />
      <HardwareControls />
    </div>
  );
};

export default Sensors;
