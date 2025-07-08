
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { 
  Calendar, 
  Clock, 
  Droplets, 
  Zap, 
  Brain,
  Settings,
  Plus,
  Target
} from 'lucide-react';

const SmartScheduler = () => {
  const [aiEnabled, setAiEnabled] = useState(true);
  const [moistureThreshold, setMoistureThreshold] = useState([30]);
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      name: 'Smart Zone A',
      field: 'North Field - Tomatoes',
      mode: 'moisture-based',
      threshold: 35,
      duration: 45,
      efficiency: 92,
      isActive: true,
      lastTriggered: '2 hours ago',
      predictedNext: 'Tomorrow 5:30 AM'
    },
    {
      id: 2,
      name: 'Weather-Adaptive Zone B',
      field: 'South Field - Corn',
      mode: 'weather-adaptive',
      threshold: 40,
      duration: 60,
      efficiency: 88,
      isActive: true,
      lastTriggered: '6 hours ago',
      predictedNext: 'Today 8:00 PM (adjusted for rain)'
    }
  ]);

  const getModeColor = (mode: string) => {
    switch (mode) {
      case 'moisture-based':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'weather-adaptive':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case 'moisture-based':
        return <Droplets className="h-3 w-3 mr-1" />;
      case 'weather-adaptive':
        return <Brain className="h-3 w-3 mr-1" />;
      default:
        return <Clock className="h-3 w-3 mr-1" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Control Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Brain className="h-5 w-5 mr-2 text-purple-600" />
              Smart Irrigation Control
            </span>
            <Switch
              checked={aiEnabled}
              onCheckedChange={setAiEnabled}
            />
          </CardTitle>
          <CardDescription>
            AI-powered irrigation scheduling based on soil conditions, weather, and crop needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <h4 className="font-medium text-purple-800">AI Optimization Status</h4>
                <p className="text-sm text-purple-600">
                  {aiEnabled ? 'Active - Making smart adjustments' : 'Disabled - Manual control only'}
                </p>
              </div>
              <Badge className={aiEnabled ? 'bg-purple-500' : 'bg-gray-500'}>
                {aiEnabled ? 'AI Active' : 'Manual'}
              </Badge>
            </div>

            {aiEnabled && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Global Moisture Threshold: {moistureThreshold[0]}%
                  </label>
                  <Slider
                    value={moistureThreshold}
                    onValueChange={setMoistureThreshold}
                    max={60}
                    min={15}
                    step={5}
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">15%</div>
                    <div className="text-xs text-green-600">Water Saved</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">8.2</div>
                    <div className="text-xs text-blue-600">AI Score</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">3</div>
                    <div className="text-xs text-orange-600">Auto Adjustments</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Smart Schedules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-green-600" />
              Smart Irrigation Schedules
            </span>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Smart Schedule
            </Button>
          </CardTitle>
          <CardDescription>
            Adaptive schedules that respond to real-time conditions
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
                    <div className="p-2 bg-green-50 rounded-lg">
                      <Zap className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{schedule.name}</h4>
                      <p className="text-sm text-gray-600">{schedule.field}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getModeColor(schedule.mode)}>
                      {getModeIcon(schedule.mode)}
                      {schedule.mode.replace('-', ' ')}
                    </Badge>
                    <Switch
                      checked={schedule.isActive}
                      onCheckedChange={() => {}}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-gray-500">Threshold</p>
                    <p className="font-medium">{schedule.threshold}% moisture</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Duration</p>
                    <p className="font-medium">{schedule.duration} minutes</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Efficiency</p>
                    <p className="font-medium text-green-600">{schedule.efficiency}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Last Triggered</p>
                    <p className="font-medium">{schedule.lastTriggered}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="text-sm">
                    <span className="text-gray-500">Next predicted run: </span>
                    <span className="font-medium">{schedule.predictedNext}</span>
                  </div>
                  <Button size="sm" variant="outline">
                    <Settings className="h-3 w-3 mr-1" />
                    Configure
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="h-5 w-5 mr-2 text-purple-600" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-1">Optimize Zone A Schedule</h4>
              <p className="text-sm text-blue-700 mb-2">
                Consider reducing irrigation frequency by 20% - soil retention analysis shows good moisture holding.
              </p>
              <Button size="sm" variant="outline">Apply Recommendation</Button>
            </div>
            
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800 mb-1">Weather Integration Success</h4>
              <p className="text-sm text-green-700 mb-2">
                Automatic schedule adjustment saved 340 gallons this week by leveraging rain predictions.
              </p>
              <Button size="sm" variant="outline">View Details</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartScheduler;
