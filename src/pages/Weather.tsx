
import React from 'react';
import WeatherInsights from '@/components/WeatherInsights';

const Weather = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Weather Insights</h1>
        <p className="text-gray-600">Weather forecasts and irrigation recommendations</p>
      </div>
      <WeatherInsights />
    </div>
  );
};

export default Weather;
