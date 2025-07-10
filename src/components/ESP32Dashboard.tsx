
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cpu, 
  MemoryStick, 
  Thermometer,
  Wifi,
  Zap,
  HardDrive,
  Clock
} from 'lucide-react';

const ESP32Dashboard = () => {
  const esp32Stats = {
    cpuUsage: 45,
    memoryUsage: 78,
    temperature: 42,
    uptime: '2d 14h 32m',
    wifiStrength: -42,
    flashUsage: 65,
    voltage: 3.28,
    frequency: 240
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Cpu className="h-5 w-5 mr-2 text-blue-600" />
          ESP32 System Monitor
        </CardTitle>
        <CardDescription>
          Real-time ESP32 microcontroller performance metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Cpu className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">CPU Usage</span>
            </div>
            <div className="text-2xl font-bold">{esp32Stats.cpuUsage}%</div>
            <Progress value={esp32Stats.cpuUsage} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MemoryStick className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">RAM Usage</span>
            </div>
            <div className="text-2xl font-bold">{esp32Stats.memoryUsage}%</div>
            <Progress value={esp32Stats.memoryUsage} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Thermometer className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">Temperature</span>
            </div>
            <div className="text-2xl font-bold">{esp32Stats.temperature}°C</div>
            <Badge variant="outline" className="text-green-600">Normal</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium">Uptime</span>
            </div>
            <div className="text-lg font-bold">{esp32Stats.uptime}</div>
            <Badge variant="outline" className="text-blue-600">Running</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Wifi className="h-4 w-4 text-cyan-500" />
              <span className="text-sm font-medium">WiFi Signal</span>
            </div>
            <div className="text-2xl font-bold">{esp32Stats.wifiStrength} dBm</div>
            <Badge variant="outline" className="text-green-600">Strong</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <HardDrive className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">Flash Usage</span>
            </div>
            <div className="text-2xl font-bold">{esp32Stats.flashUsage}%</div>
            <Progress value={esp32Stats.flashUsage} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium">Voltage</span>
            </div>
            <div className="text-2xl font-bold">{esp32Stats.voltage}V</div>
            <Badge variant="outline" className="text-green-600">Stable</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Cpu className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium">CPU Frequency</span>
            </div>
            <div className="text-2xl font-bold">{esp32Stats.frequency} MHz</div>
            <Badge variant="outline" className="text-blue-600">Dual Core</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ESP32Dashboard;
