
import React, { useState } from 'react';
import Header from '@/components/Header';
import SystemOverview from '@/components/SystemOverview';
import WeatherWidget from '@/components/WeatherWidget';
import MainDashboard from '@/components/MainDashboard';

const Index = () => {
  const [activeField, setActiveField] = useState('field-1');

  const fields = [
    { id: 'field-1', name: 'North Field - Tomatoes', area: '5.2 acres', status: 'active' },
    { id: 'field-2', name: 'South Field - Corn', area: '8.1 acres', status: 'scheduled' },
    { id: 'field-3', name: 'East Field - Lettuce', area: '3.5 acres', status: 'maintenance' },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SystemOverview systemStatus={systemStatus} weatherData={weatherData} />
        
        <WeatherWidget weatherData={weatherData} />
        
        <MainDashboard 
          fields={fields} 
          activeField={activeField} 
          setActiveField={setActiveField} 
        />
      </div>
    </div>
  );
};

export default Index;
