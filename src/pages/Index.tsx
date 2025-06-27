
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Droplets, 
  Thermometer, 
  Wind, 
  Sun, 
  Calendar,
  Settings,
  Activity,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';
import IrrigationSchedule from '@/components/IrrigationSchedule';
import SensorDashboard from '@/components/SensorDashboard';
import FieldMap from '@/components/FieldMap';
import WaterUsageChart from '@/components/WaterUsageChart';

const Index = () => {
  const [activeField, setActiveField] = useState('field-1');

  // Mock data for demonstration
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
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SmartIrrigate</h1>
                <p className="text-sm text-gray-600">Intelligent Farming Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                System Online
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.systemHealth}%</div>
              <Progress value={systemStatus.systemHealth} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Weather Widget */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sun className="h-5 w-5 mr-2 text-yellow-500" />
              Weather Conditions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sensors">Sensors</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="fields">Fields</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SensorDashboard />
              <IrrigationSchedule />
            </div>
          </TabsContent>

          <TabsContent value="sensors" className="space-y-6">
            <SensorDashboard />
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <IrrigationSchedule />
          </TabsContent>

          <TabsContent value="fields" className="space-y-6">
            <FieldMap fields={fields} activeField={activeField} setActiveField={setActiveField} />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <WaterUsageChart />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
