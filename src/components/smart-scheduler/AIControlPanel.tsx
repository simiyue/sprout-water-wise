
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Brain, 
  Droplets, 
  Thermometer, 
  Cloud,
  Save
} from 'lucide-react';

interface AIControlPanelProps {
  aiMode: boolean;
  setAiMode: (value: boolean) => void;
  moistureThreshold: number[];
  setMoistureThreshold: (value: number[]) => void;
  tempThreshold: number[];
  setTempThreshold: (value: number[]) => void;
  rainDelay: number[];
  setRainDelay: (value: number[]) => void;
}

const AIControlPanel = ({
  aiMode,
  setAiMode,
  moistureThreshold,
  setMoistureThreshold,
  tempThreshold,
  setTempThreshold,
  rainDelay,
  setRainDelay
}: AIControlPanelProps) => {
  return (
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
  );
};

export default AIControlPanel;
