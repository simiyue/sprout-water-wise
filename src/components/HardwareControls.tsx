
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { 
  Power, 
  Droplets, 
  RotateCcw,
  Settings,
  MonitorSpeaker,
  Smartphone,
  Gauge,
  Timer,
  Zap
} from 'lucide-react';

const HardwareControls = () => {
  const [waterValveOpen, setWaterValveOpen] = useState(false);
  const [motorRunning, setMotorRunning] = useState(false);
  const [pumpSpeed, setPumpSpeed] = useState([75]);
  const [oledDisplay, setOledDisplay] = useState(true);
  const [gsmConnected, setGsmConnected] = useState(true);

  const hardwareComponents = [
    {
      name: 'Water Solenoid Valve',
      pin: 'GPIO 2',
      status: waterValveOpen ? 'Open' : 'Closed',
      isActive: waterValveOpen,
      icon: Droplets,
      color: waterValveOpen ? 'text-blue-500' : 'text-gray-500'
    },
    {
      name: 'Water Pump Motor',
      pin: 'GPIO 5',
      status: motorRunning ? 'Running' : 'Stopped',
      isActive: motorRunning,
      icon: RotateCcw,
      color: motorRunning ? 'text-green-500' : 'text-gray-500'
    },
    {
      name: 'OLED Display (128x64)',
      pin: 'I2C (SDA/SCL)',
      status: oledDisplay ? 'Active' : 'Off',
      isActive: oledDisplay,
      icon: MonitorSpeaker,
      color: oledDisplay ? 'text-purple-500' : 'text-gray-500'
    },
    {
      name: 'GSM Module',
      pin: 'UART2',
      status: gsmConnected ? 'Connected' : 'Disconnected',
      isActive: gsmConnected,
      icon: Smartphone,
      color: gsmConnected ? 'text-cyan-500' : 'text-red-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Main Hardware Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2 text-blue-600" />
            ESP32 Hardware Controls
          </CardTitle>
          <CardDescription>
            Direct control of connected hardware components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hardwareComponents.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`h-5 w-5 ${component.color}`} />
                      <div>
                        <h4 className="font-medium">{component.name}</h4>
                        <p className="text-sm text-gray-500">Pin: {component.pin}</p>
                      </div>
                    </div>
                    <Badge variant={component.isActive ? "default" : "outline"}>
                      {component.status}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Control</span>
                    <Switch
                      checked={component.isActive}
                      onCheckedChange={(checked) => {
                        if (component.name.includes('Valve')) setWaterValveOpen(checked);
                        if (component.name.includes('Motor')) setMotorRunning(checked);
                        if (component.name.includes('OLED')) setOledDisplay(checked);
                        if (component.name.includes('GSM')) setGsmConnected(checked);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Advanced Motor Control */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Gauge className="h-5 w-5 mr-2 text-green-600" />
            Motor Speed Control (PWM)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Pump Speed: {pumpSpeed[0]}%</span>
              <Badge variant="outline">GPIO 5 (PWM)</Badge>
            </div>
            <Slider
              value={pumpSpeed}
              onValueChange={setPumpSpeed}
              max={100}
              min={0}
              step={5}
              className="w-full"
              disabled={!motorRunning}
            />
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setPumpSpeed([25])}
                disabled={!motorRunning}
              >
                Low
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setPumpSpeed([50])}
                disabled={!motorRunning}
              >
                Medium
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setPumpSpeed([100])}
                disabled={!motorRunning}
              >
                High
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Power className="h-5 w-5 mr-2 text-red-600" />
            System Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="flex flex-col h-20">
              <Timer className="h-4 w-4 mb-1" />
              <span className="text-xs">Manual Irrigation</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-20">
              <Smartphone className="h-4 w-4 mb-1" />
              <span className="text-xs">Send SMS Alert</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-20">
              <MonitorSpeaker className="h-4 w-4 mb-1" />
              <span className="text-xs">Update Display</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-20">
              <Zap className="h-4 w-4 mb-1" />
              <span className="text-xs">System Reset</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HardwareControls;
