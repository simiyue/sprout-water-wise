
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Thermometer, 
  Zap, 
  Activity,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const SensorDashboard = () => {
  const sensorData = [
    {
      id: 1,
      name: 'Soil Moisture - Zone A',
      value: 45,
      unit: '%',
      status: 'good',
      icon: Droplets,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      lastUpdate: '2 min ago'
    },
    {
      id: 2,
      name: 'Soil Temperature',
      value: 72,
      unit: '°F',
      status: 'good',
      icon: Thermometer,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      lastUpdate: '1 min ago'
    },
    {
      id: 3,
      name: 'Soil pH Level',
      value: 6.8,
      unit: 'pH',
      status: 'good',
      icon: Activity,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      lastUpdate: '5 min ago'
    },
    {
      id: 4,
      name: 'Battery Level',
      value: 85,
      unit: '%',
      status: 'good',
      icon: Zap,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      lastUpdate: '10 min ago'
    },
    {
      id: 5,
      name: 'Soil Moisture - Zone B',
      value: 25,
      unit: '%',
      status: 'warning',
      icon: Droplets,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      lastUpdate: '1 min ago'
    },
    {
      id: 6,
      name: 'EC Level',
      value: 1.2,
      unit: 'mS/cm',
      status: 'good',
      icon: Activity,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      lastUpdate: '3 min ago'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good':
        return <Badge variant="outline" className="text-green-600 border-green-200">
          <CheckCircle className="h-3 w-3 mr-1" />
          Good
        </Badge>;
      case 'warning':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-200">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Warning
        </Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Activity className="h-5 w-5 mr-2 text-green-600" />
            Sensor Monitoring
          </span>
          <Button variant="outline" size="sm">
            Refresh Data
          </Button>
        </CardTitle>
        <CardDescription>
          Real-time monitoring of field sensors and environmental conditions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sensorData.map((sensor) => {
            const IconComponent = sensor.icon;
            return (
              <div
                key={sensor.id}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${sensor.bgColor}`}>
                      <IconComponent className={`h-4 w-4 ${sensor.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{sensor.name}</h4>
                      <p className="text-xs text-gray-500">{sensor.lastUpdate}</p>
                    </div>
                  </div>
                  {getStatusBadge(sensor.status)}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      {sensor.value}{sensor.unit}
                    </span>
                  </div>
                  
                  {sensor.unit === '%' && (
                    <Progress 
                      value={sensor.value} 
                      className="h-2"
                    />
                  )}
                  
                  {sensor.status === 'warning' && (
                    <div className="flex items-center text-sm text-yellow-600 mt-2">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Irrigation recommended
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SensorDashboard;
