
import React from 'react';
import IrrigationSchedule from '@/components/IrrigationSchedule';

const Schedule = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Irrigation Schedule</h1>
        <p className="text-gray-600">Manage your automated irrigation schedules</p>
      </div>
      <IrrigationSchedule />
    </div>
  );
};

export default Schedule;
