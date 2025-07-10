
import React, { useState, useEffect } from 'react';
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
  CheckCircle,
  Wifi,
  WifiOff,
  Gauge,
  MonitorSpeaker
} from 'lucide-react';

const SensorDashboard = () => {
  const [connectionStatus, setConnectionStatus] = useState('connected');
  
  const hardwareSensorData = [
    {
      id: 1,
      name: 'DHT22 - Temperature',
      value: 28.5,
      unit: '°C',
      status: 'good',
      icon: Thermometer,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      lastUpdate: '30 sec ago',
      pin: 'GPIO 4'
    },
    {
      id: 2,
      name: 'DHT22 - Humidity',
      value: 68,
      unit: '%',
      status: 'good',
      icon: Droplets,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      lastUpdate: '30 sec ago',
      pin: 'GPIO 4'
    },
    {
      id: 3,
      name: 'Soil Moisture Sensor',
      value: 32,
      unit: '%',
      status: 'warning',
      icon: Activity,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      lastUpdate: '15 sec ago',
      pin: 'ADC A0'
    },
    {
      id: 4,
      name: 'ESP32 WiFi Signal',
      value: -45,
      unit: 'dBm',
      status: 'good',
      icon: Wifi,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      lastUpdate: '5 sec ago',
      pin: 'Built-in'
    },
    {
      id: 5,
      name: 'GSM Signal Strength',
      value: 85,
      unit: '%',
      status: 'good',
      icon: Activity,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50',
      lastUpdate: '1 min ago',
      pin: 'UART2'
    },
    {
      id: 6,
      name: 'System Voltage',
      value: 12.3,
      unit: 'V',
      status: 'good',
      icon: Zap,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      lastUpdate: '10 sec ago',
      pin: 'ADC A1'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good':
        return <Badge variant="outline" className="text-green-600 border-green-200">
          <CheckCircle className="h-3 w-3 mr-1" />
          Online
        </Badge>;
      case 'warning':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-200">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Alert
        </Badge>;
      case 'offline':
        return <Badge variant="outline" className="text-red-600 border-red-200">
          <WifiOff className="h-3 w-3 mr-1" />
          Offline
        </Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* ESP32 Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Activity className="h-5 w-5 mr-2 text-green-600" />
              ESP32 Hardware Status
            </span>
            <div className="flex items-center space-x-2">
              <Badge className={connectionStatus === 'connected' ? 'bg-green-500' : 'bg-red-500'}>
                {connectionStatus === 'connected' ? <CheckCircle className="h-3 w-3 mr-1" /> : <WifiOff className="h-3 w-3 mr-1" />}
                {connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
              </Badge>
              <Button variant="outline" size="sm">
                <MonitorSpeaker className="h-4 w-4 mr-2" />
                OLED Display
              </Button>
            </div>
          </CardTitle>
          <CardDescription>
            Real-time data from ESP32 microcontroller and connected sensors
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Hardware Sensors Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Hardware Sensor Readings</span>
            <Button variant="outline" size="sm">
              Refresh Data
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hardwareSensorData.map((sensor) => {
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
                        <p className="text-xs text-gray-500">Pin: {sensor.pin}</p>
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
                    
                    {sensor.unit === '%' && sensor.name.includes('Moisture') && (
                      <Progress 
                        value={sensor.value} 
                        className="h-2"
                      />
                    )}
                    
                    {sensor.unit === '%' && sensor.name.includes('Humidity') && (
                      <Progress 
                        value={sensor.value} 
                        className="h-2"
                      />
                    )}
                    
                    {sensor.status === 'warning' && sensor.name.includes('Moisture') && (
                      <div className="flex items-center text-sm text-yellow-600 mt-2">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Low moisture - irrigation needed
                      </div>
                    )}
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

export default SensorDashboard;
