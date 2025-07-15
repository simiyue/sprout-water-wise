
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target,
  Droplets,
  Calendar,
  TrendingUp
} from 'lucide-react';

interface MetricCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  trend: string;
  iconColor: string;
}

const MetricCard = ({ icon: Icon, label, value, trend, iconColor }: MetricCardProps) => (
  <Card>
    <CardContent className="p-4">
      <div className="flex items-center space-x-2">
        <Icon className={`h-4 w-4 ${iconColor}`} />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      <div className="text-xs text-green-600 flex items-center mt-1">
        <TrendingUp className="h-3 w-3 mr-1" />
        {trend}
      </div>
    </CardContent>
  </Card>
);

const PerformanceMetrics = () => {
  const metrics = [
    {
      icon: Target,
      label: 'AI Efficiency',
      value: '94.2%',
      trend: '+2.1% this week',
      iconColor: 'text-blue-500'
    },
    {
      icon: Droplets,
      label: 'Water Saved',
      value: '1,247 gal',
      trend: 'This month',
      iconColor: 'text-green-500'
    },
    {
      icon: Calendar,
      label: 'Auto Adjustments',
      value: '47',
      trend: 'Last 7 days',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default PerformanceMetrics;
