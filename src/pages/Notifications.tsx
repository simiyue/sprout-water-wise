
import React from 'react';
import NotificationCenter from '@/components/NotificationCenter';

const Notifications = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Alert Center</h1>
        <p className="text-gray-600">System notifications and alerts</p>
      </div>
      <NotificationCenter />
    </div>
  );
};

export default Notifications;
