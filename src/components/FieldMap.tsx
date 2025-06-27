
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Droplets, 
  Thermometer, 
  Activity,
  Settings,
  Plus
} from 'lucide-react';

interface Field {
  id: string;
  name: string;
  area: string;
  status: string;
}

interface FieldMapProps {
  fields: Field[];
  activeField: string;
  setActiveField: (fieldId: string) => void;
}

const FieldMap = ({ fields, activeField, setActiveField }: FieldMapProps) => {
  const fieldDetails = {
    'field-1': {
      soilMoisture: 45,
      temperature: 72,
      lastIrrigation: '2 hours ago',
      nextScheduled: 'Tomorrow 6:00 AM',
      sensors: 4,
      waterUsage: '1,240 gallons this week'
    },
    'field-2': {
      soilMoisture: 38,
      temperature: 75,
      lastIrrigation: '6 hours ago',
      nextScheduled: 'Today 7:30 PM',
      sensors: 6,
      waterUsage: '2,100 gallons this week'
    },
    'field-3': {
      soilMoisture: 52,
      temperature: 70,
      lastIrrigation: '1 day ago',
      nextScheduled: 'Under maintenance',
      sensors: 3,
      waterUsage: '850 gallons this week'
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Scheduled</Badge>;
      case 'maintenance':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-200">Maintenance</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const selectedField = fieldDetails[activeField as keyof typeof fieldDetails];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Field List */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-green-600" />
              Fields
            </span>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Field
            </Button>
          </CardTitle>
          <CardDescription>
            Select a field to view details and manage irrigation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {fields.map((field) => (
              <div
                key={field.id}
                className={`p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  activeField === field.id 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveField(field.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{field.name}</h4>
                  {getStatusBadge(field.status)}
                </div>
                <p className="text-xs text-gray-600">{field.area}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Field Details */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Field Details</span>
            <Button size="sm" variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </CardTitle>
          <CardDescription>
            {fields.find(f => f.id === activeField)?.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {selectedField && (
            <div className="space-y-6">
              {/* Sensor Readings */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Droplets className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Soil Moisture</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-900">{selectedField.soilMoisture}%</div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Thermometer className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-800">Temperature</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-900">{selectedField.temperature}°F</div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Active Sensors</span>
                  </div>
                  <div className="text-2xl font-bold text-green-900">{selectedField.sensors}</div>
                </div>
              </div>

              {/* Irrigation Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Irrigation Status</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Last Irrigation:</span>
                      <span className="text-sm font-medium">{selectedField.lastIrrigation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Next Scheduled:</span>
                      <span className="text-sm font-medium">{selectedField.nextScheduled}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Water Usage:</span>
                      <span className="text-sm font-medium">{selectedField.waterUsage}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button className="w-full" size="sm">
                      <Droplets className="h-4 w-4 mr-2" />
                      Start Manual Irrigation
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Schedule
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Activity className="h-4 w-4 mr-2" />
                      View Sensor History
                    </Button>
                  </div>
                </div>
              </div>

              {/* Visual Field Map Placeholder */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Field Layout</h4>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-700">Interactive field map coming soon</p>
                  <p className="text-sm text-gray-600 mt-1">Visualize sensor locations and irrigation zones</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FieldMap;
