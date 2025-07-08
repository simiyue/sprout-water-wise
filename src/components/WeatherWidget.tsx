
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Thermometer, 
  Wind, 
  Sun,
  Brain,
  Zap
} from 'lucide-react';

interface WeatherWidgetProps {
  weatherData: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    rainChance: number;
  };
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weatherData }) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Sun className="h-5 w-5 mr-2 text-yellow-500" />
            Weather Conditions & AI Recommendations
          </span>
          <Badge className="bg-blue-500">
            <Zap className="h-3 w-3 mr-1" />
            Smart Adjustments Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4 text-red-500" />
            <span className="text-sm">Temperature: {weatherData.temperature}°F</span>
          </div>
          <div className="flex items-center space-x-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <span className="text-sm">Humidity: {weatherData.humidity}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-gray-500" />
            <span className="text-sm">Wind: {weatherData.windSpeed} mph</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 text-yellow-500" />
            <span className="text-sm">Rain Chance: {weatherData.rainChance}%</span>
          </div>
          <div className="flex items-center space-x-2 text-green-600">
            <Brain className="h-4 w-4" />
            <span className="text-sm font-medium">Rain detected - Auto-adjusting</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
