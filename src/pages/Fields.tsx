
import React, { useState } from 'react';
import FieldMap from '@/components/FieldMap';

const Fields = () => {
  const [activeField, setActiveField] = useState('field-1');

  const fields = [
    { id: 'field-1', name: 'North Field - Tomatoes', area: '5.2 acres', status: 'active' },
    { id: 'field-2', name: 'South Field - Corn', area: '8.1 acres', status: 'scheduled' },
    { id: 'field-3', name: 'East Field - Lettuce', area: '3.5 acres', status: 'maintenance' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Field Management</h1>
        <p className="text-gray-600">Manage your fields and irrigation zones</p>
      </div>
      <FieldMap 
        fields={fields} 
        activeField={activeField} 
        setActiveField={setActiveField} 
      />
    </div>
  );
};

export default Fields;
