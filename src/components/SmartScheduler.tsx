
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Brain, 
  Droplets, 
  Thermometer, 
  Cloud,
  Save,
  Zap,
  TrendingUp,
  Calendar,
  Target
} from 'lucide-react';

const SmartScheduler = () => {
  const [aiMode, setAiMode] = useState(true);
  const [moistureThreshold, setMoistureThreshold] = useState([35]);
  const [tempThreshold, setTempThreshold] = useState([80]);
  const [rainDelay, setRainDelay] = useState([24]);

  const aiRecommendations = [
    {
      field: 'North Field - Tomatoes',
      recommendation: 'Increase irrigation by 15% due to high temperature forecast',
      confidence: 94,
      waterSaving: '12%',
      impact: 'High'
    },
    {
      field: 'South Field - Corn',
      recommendation: 'Delay irrigation for 8 hours due to incoming rain',
      confidence: 89,
      waterSaving: '25%',
      impact: 'Medium'
    },
    {
      field: 'East Field - Lettuce',
      recommendation: 'Maintain current schedule - optimal conditions',
      confidence: 96,
      waterSaving: '5%',
      impact: 'Low'
    }
  ];

  return (
    <div className="space-y-6">
      {/* AI Control Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Brain className="h-5 w-5 mr-2 text-purple-600" />
              AI Smart Scheduling
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">AI Mode</span>
              <Switch checked={aiMode} onCheckedChange={setAiMode} />
            </div>
          </CardTitle>
          <CardDescription>
            Let AI optimize your irrigation schedules based on weather, soil conditions, and plant needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium flex items-center">
                <Droplets className="h-4 w-4 mr-2 text-blue-500" />
                Soil Moisture Threshold: {moistureThreshold[0]}%
              </label>
              <Slider
                value={moistureThreshold}
                onValueChange={setMoistureThreshold}
                max={60}
                min={20}
                step={5}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium flex items-center">
                <Thermometer className="h-4 w-4 mr-2 text-orange-500" />
                Temperature Trigger: {tempThreshold[0]}°F
              </label>
              <Slider
                value={tempThreshold}
                onValueChange={setTempThreshold}
                max={100}
                min={60}
                step={5}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium flex items-center">
                <Cloud className="h-4 w-4 mr-2 text-gray-500" />
                Rain Delay: {rainDelay[0]} hours
              </label>
              <Slider
                value={rainDelay}
                onValueChange={setRainDelay}
                max={48}
                min={6}
                step={6}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save AI Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-500" />
            Current AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiRecommendations.map((rec, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{rec.field}</h4>
                    <p className="text-sm text-gray-600 mt-1">{rec.recommendation}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge 
                      variant="outline" 
                      className={
                        rec.impact === 'High' ? 'text-red-600 border-red-200' :
                        rec.impact === 'Medium' ? 'text-yellow-600 border-yellow-200' :
                        'text-green-600 border-green-200'
                      }
                    >
                      {rec.impact} Impact
                    </Badge>
                    <div className="text-xs text-gray-500">
                      {rec.confidence}% confidence
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {rec.waterSaving} water savings
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Apply
                    </Button>
                    <Button size="sm" variant="ghost">
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">AI Efficiency</span>
            </div>
            <div className="text-2xl font-bold mt-1">94.2%</div>
            <div className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +2.1% this week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Droplets className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-600">Water Saved</span>
            </div>
            <div className="text-2xl font-bold mt-1">1,247 gal</div>
            <div className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              This month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-purple-500" />
              <span className="text-sm text-gray-600">Auto Adjustments</span>
            </div>
            <div className="text-2xl font-bold mt-1">47</div>
            <div className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              Last 7 days
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SmartScheduler;
