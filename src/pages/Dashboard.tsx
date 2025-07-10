
import React, { useState } from 'react';
import SystemOverview from '@/components/SystemOverview';
import WeatherWidget from '@/components/WeatherWidget';
import SensorDashboard from '@/components/SensorDashboard';
import IrrigationSchedule from '@/components/IrrigationSchedule';
import NotificationCenter from '@/components/NotificationCenter';

const Dashboard = () => {
  const weatherData = {
    temperature: 78,
    humidity: 65,
    windSpeed: 12,
    forecast: 'Partly cloudy',
    rainChance: 20
  };

  const systemStatus = {
    totalFields: 3,
    activeIrrigation: 1,
    waterPressure: 85,
    systemHealth: 94
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your smart irrigation system</p>
      </div>
      
      <SystemOverview systemStatus={systemStatus} weatherData={weatherData} />
      <WeatherWidget weatherData={weatherData} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SensorDashboard />
        <IrrigationSchedule />
      </div>
      
      <NotificationCenter />
    </div>
  );
};

export default Dashboard;
