
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IrrigationSchedule from '@/components/IrrigationSchedule';
import SensorDashboard from '@/components/SensorDashboard';
import FieldMap from '@/components/FieldMap';
import NotificationCenter from '@/components/NotificationCenter';
import WeatherInsights from '@/components/WeatherInsights';
import AdvancedAnalytics from '@/components/AdvancedAnalytics';
import SmartScheduler from '@/components/SmartScheduler';

interface MainDashboardProps {
  fields: Array<{
    id: string;
    name: string;
    area: string;
    status: string;
  }>;
  activeField: string;
  setActiveField: (fieldId: string) => void;
}

const MainDashboard: React.FC<MainDashboardProps> = ({ fields, activeField, setActiveField }) => {
  return (
    <Tabs defaultValue="overview" className="space-y-6">
      <TabsList className="grid w-full grid-cols-8">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="sensors">Sensors</TabsTrigger>
        <TabsTrigger value="smart-schedule">Smart Schedule</TabsTrigger>
        <TabsTrigger value="schedule">Schedule</TabsTrigger>
        <TabsTrigger value="fields">Fields</TabsTrigger>
        <TabsTrigger value="weather">Weather</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="notifications">Alerts</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SensorDashboard />
          <IrrigationSchedule />
        </div>
        <NotificationCenter />
      </TabsContent>

      <TabsContent value="sensors" className="space-y-6">
        <SensorDashboard />
      </TabsContent>

      <TabsContent value="smart-schedule" className="space-y-6">
        <SmartScheduler />
      </TabsContent>

      <TabsContent value="schedule" className="space-y-6">
        <IrrigationSchedule />
      </TabsContent>

      <TabsContent value="fields" className="space-y-6">
        <FieldMap fields={fields} activeField={activeField} setActiveField={setActiveField} />
      </TabsContent>

      <TabsContent value="weather" className="space-y-6">
        <WeatherInsights />
      </TabsContent>

      <TabsContent value="analytics" className="space-y-6">
        <AdvancedAnalytics />
      </TabsContent>

      <TabsContent value="notifications" className="space-y-6">
        <NotificationCenter />
      </TabsContent>
    </Tabs>
  );
};

export default MainDashboard;
