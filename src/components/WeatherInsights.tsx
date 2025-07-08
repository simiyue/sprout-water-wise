
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  Wind, 
  Droplets,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Lightbulb
} from 'lucide-react';

const WeatherInsights = () => {
  const currentWeather = {
    temperature: 78,
    humidity: 65,
    windSpeed: 12,
    uvIndex: 7,
    pressure: 30.15,
    condition: 'Partly Cloudy'
  };

  const forecast = [
    { day: 'Today', temp: { high: 82, low: 68 }, rain: 20, icon: Sun },
    { day: 'Tomorrow', temp: { high: 75, low: 62 }, rain: 80, icon: CloudRain },
    { day: 'Thu', temp: { high: 79, low: 65 }, rain: 15, icon: Sun },
    { day: 'Fri', temp: { high: 84, low: 70 }, rain: 5, icon: Sun },
    { day: 'Sat', temp: { high: 86, low: 72 }, rain: 10, icon: Sun }
  ];

  const recommendations = [
    {
      type: 'info',
      icon: Droplets,
      title: 'Reduce Irrigation Tomorrow',
      description: 'Expected rainfall will provide 0.8 inches of water. Consider skipping morning irrigation.',
      action: 'Auto-adjust Schedule'
    },
    {
      type: 'warning',
      icon: TrendingUp,
      title: 'High Temperatures Expected',
      description: 'Weekend temperatures will exceed 85°F. Increase evening irrigation duration.',
      action: 'Extend Schedule'
    },
    {
      type: 'success',
      icon: Wind,
      title: 'Optimal Conditions',
      description: 'Low wind speeds ideal for pesticide application if needed.',
      action: 'Schedule Application'
    }
  ];

  const getRecommendationColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'success':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Weather */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sun className="h-5 w-5 mr-2 text-yellow-500" />
            Current Weather Conditions
          </CardTitle>
          <CardDescription>Real-time weather data and environmental conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {currentWeather.temperature}°F
              </div>
              <div className="text-sm text-orange-600">Temperature</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {currentWeather.humidity}%
              </div>
              <div className="text-sm text-blue-600">Humidity</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-600">
                {currentWeather.windSpeed} mph
              </div>
              <div className="text-sm text-gray-600">Wind Speed</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {currentWeather.uvIndex}
              </div>
              <div className="text-sm text-purple-600">UV Index</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 5-Day Forecast */}
      <Card>
        <CardHeader>
          <CardTitle>5-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {forecast.map((day, index) => {
              const IconComponent = day.icon;
              return (
                <div key={index} className="text-center p-3 border rounded-lg">
                  <div className="text-sm font-medium mb-2">{day.day}</div>
                  <IconComponent className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                  <div className="text-xs space-y-1">
                    <div className="font-medium">{day.temp.high}°/{day.temp.low}°</div>
                    <div className="flex items-center justify-center text-blue-600">
                      <Droplets className="h-3 w-3 mr-1" />
                      {day.rain}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Smart Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
            Smart Irrigation Recommendations
          </CardTitle>
          <CardDescription>AI-powered suggestions based on weather patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec, index) => {
              const IconComponent = rec.icon;
              return (
                <div
                  key={index}
                  className={`p-4 border rounded-lg ${getRecommendationColor(rec.type)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <IconComponent className="h-5 w-5 mt-0.5" />
                      <div>
                        <h4 className="font-medium">{rec.title}</h4>
                        <p className="text-sm mt-1 opacity-80">{rec.description}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="ml-4">
                      {rec.action}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherInsights;
