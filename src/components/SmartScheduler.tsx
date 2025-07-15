
import React, { useState } from 'react';
import AIControlPanel from './smart-scheduler/AIControlPanel';
import AIRecommendations from './smart-scheduler/AIRecommendations';
import PerformanceMetrics from './smart-scheduler/PerformanceMetrics';

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
      impact: 'High' as const
    },
    {
      field: 'South Field - Corn',
      recommendation: 'Delay irrigation for 8 hours due to incoming rain',
      confidence: 89,
      waterSaving: '25%',
      impact: 'Medium' as const
    },
    {
      field: 'East Field - Lettuce',
      recommendation: 'Maintain current schedule - optimal conditions',
      confidence: 96,
      waterSaving: '5%',
      impact: 'Low' as const
    }
  ];

  return (
    <div className="space-y-6">
      <AIControlPanel
        aiMode={aiMode}
        setAiMode={setAiMode}
        moistureThreshold={moistureThreshold}
        setMoistureThreshold={setMoistureThreshold}
        tempThreshold={tempThreshold}
        setTempThreshold={setTempThreshold}
        rainDelay={rainDelay}
        setRainDelay={setRainDelay}
      />

      <AIRecommendations recommendations={aiRecommendations} />

      <PerformanceMetrics />
    </div>
  );
};

export default SmartScheduler;
