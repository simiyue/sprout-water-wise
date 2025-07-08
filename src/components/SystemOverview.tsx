
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Activity,
  MapPin,
  CheckCircle,
  Thermometer,
  Brain,
  TrendingUp
} from 'lucide-react';

interface SystemOverviewProps {
  systemStatus: {
    totalFields: number;
    activeIrrigation: number;
    waterPressure: number;
    systemHealth: number;
  };
  weatherData: {
    temperature: number;
    humidity: number;
  };
}

const SystemOverview: React.FC<SystemOverviewProps> = ({ systemStatus, weatherData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Fields</CardTitle>
          <MapPin className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{systemStatus.totalFields}</div>
          <p className="text-xs text-muted-foreground">
            {systemStatus.activeIrrigation} currently irrigating
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Water Pressure</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{systemStatus.waterPressure} PSI</div>
          <Progress value={systemStatus.waterPressure} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Temperature</CardTitle>
          <Thermometer className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{weatherData.temperature}°F</div>
          <p className="text-xs text-muted-foreground">
            Humidity: {weatherData.humidity}%
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">AI Efficiency</CardTitle>
          <Brain className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">89%</div>
          <p className="text-xs text-green-600 flex items-center">
            <TrendingUp className="h-3 w-3 mr-1" />
            +5.2% this week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">System Health</CardTitle>
          <CheckCircle className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{systemStatus.systemHealth}%</div>
          <Progress value={systemStatus.systemHealth} className="mt-2" />
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemOverview;
