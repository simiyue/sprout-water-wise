
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Calendar, 
  Clock, 
  Droplets, 
  Play, 
  Pause, 
  Settings,
  Plus,
  Zap,
  Gauge
} from 'lucide-react';

const IrrigationSchedule = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      name: 'Zone A - DHT22 Triggered',
      field: 'North Field - Tomatoes',
      time: '06:00 AM',
      duration: '45 min',
      days: ['Mon', 'Wed', 'Fri'],
      isActive: true,
      status: 'scheduled',
      waterAmount: '250 gallons',
      trigger: 'Soil Moisture < 30%',
      hardware: 'GPIO 2 + GPIO 5'
    },
    {
      id: 2,
      name: 'Zone B - Manual Override',
      field: 'South Field - Corn', 
      time: '07:30 PM',
      duration: '60 min',
      days: ['Tue', 'Thu', 'Sat'],
      isActive: true,
      status: 'running',
      waterAmount: '400 gallons',
      trigger: 'Manual Activation',
      hardware: 'GPIO 2 + GPIO 5'
    },
    {
      id: 3,
      name: 'Zone C - GSM Alert Based',
      field: 'East Field - Lettuce',
      time: '12:00 PM', 
      duration: '30 min',
      days: ['Daily'],
      isActive: false,
      status: 'paused',
      waterAmount: '150 gallons',
      trigger: 'SMS Command',
      hardware: 'GPIO 2 + GPIO 5'
    }
  ]);

  const toggleSchedule = (id: number) => {
    setSchedules(schedules.map(schedule => 
      schedule.id === id 
        ? { ...schedule, isActive: !schedule.isActive }
        : schedule
    ));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'running':
        return <Badge className="bg-green-500 hover:bg-green-600">
          <Play className="h-3 w-3 mr-1" />
          Valve Open
        </Badge>;
      case 'scheduled':
        return <Badge variant="outline" className="text-blue-600 border-blue-200">
          <Clock className="h-3 w-3 mr-1" />
          Scheduled
        </Badge>;
      case 'paused':
        return <Badge variant="outline" className="text-gray-600 border-gray-200">
          <Pause className="h-3 w-3 mr-1" />
          Paused
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
            <Calendar className="h-5 w-5 mr-2 text-blue-600" />
            ESP32 Irrigation Control
          </span>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Schedule
          </Button>
        </CardTitle>
        <CardDescription>
          Hardware-controlled irrigation schedules with sensor triggers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Droplets className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{schedule.name}</h4>
                    <p className="text-sm text-gray-600">{schedule.field}</p>
                    <p className="text-xs text-purple-600">Hardware: {schedule.hardware}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(schedule.status)}
                  <Switch
                    checked={schedule.isActive}
                    onCheckedChange={() => toggleSchedule(schedule.id)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Time</p>
                  <p className="font-medium flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {schedule.time}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">{schedule.duration}</p>
                </div>
                <div>
                  <p className="text-gray-500">Days</p>
                  <p className="font-medium">{schedule.days.join(', ')}</p>
                </div>
                <div>
                  <p className="text-gray-500">Water Flow</p>
                  <p className="font-medium">{schedule.waterAmount}</p>
                </div>
                <div>
                  <p className="text-gray-500">Trigger</p>
                  <p className="font-medium text-green-600">{schedule.trigger}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t">
                <div className="flex space-x-2">
                  {schedule.status === 'running' ? (
                    <Button size="sm" variant="outline">
                      <Pause className="h-3 w-3 mr-1" />
                      Close Valve
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline">
                      <Play className="h-3 w-3 mr-1" />
                      Open Valve
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Gauge className="h-3 w-3 mr-1" />
                    Motor Control
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings className="h-3 w-3 mr-1" />
                    Configure
                  </Button>
                </div>
                {schedule.status === 'running' && (
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="text-green-600">
                      <Zap className="h-3 w-3 inline mr-1" />
                      Motor: ON
                    </div>
                    <div className="text-blue-600">
                      <Droplets className="h-3 w-3 inline mr-1" />
                      Valve: OPEN
                    </div>
                    <div className="text-purple-600">
                      ⏱️ 15 min remaining
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IrrigationSchedule;
