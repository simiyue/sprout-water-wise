
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Target,
  Award,
  Zap,
  Calendar
} from 'lucide-react';

const AdvancedAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const efficiencyData = [
    { week: 'Week 1', efficiency: 82, waterSaved: 150, cost: 45 },
    { week: 'Week 2', efficiency: 87, waterSaved: 200, cost: 38 },
    { week: 'Week 3', efficiency: 85, waterSaved: 175, cost: 42 },
    { week: 'Week 4', efficiency: 91, waterSaved: 250, cost: 35 }
  ];

  const cropYieldData = [
    { month: 'Jan', tomatoes: 1200, corn: 800, lettuce: 600 },
    { month: 'Feb', tomatoes: 1400, corn: 900, lettuce: 750 },
    { month: 'Mar', tomatoes: 1600, corn: 1100, lettuce: 850 },
    { month: 'Apr', tomatoes: 1800, corn: 1300, lettuce: 900 },
    { month: 'May', tomatoes: 2000, corn: 1500, lettuce: 1000 },
    { month: 'Jun', tomatoes: 2200, corn: 1700, lettuce: 1100 }
  ];

  const kpiData = [
    {
      title: 'Water Efficiency',
      value: '89%',
      change: '+5.2%',
      trend: 'up',
      icon: Zap,
      color: 'text-green-600 bg-green-50'
    },
    {
      title: 'Cost Savings',
      value: '$247',
      change: '+12.5%',
      trend: 'up',
      icon: Target,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Crop Yield',
      value: '18.2%',
      change: '+3.1%',
      trend: 'up',
      icon: Award,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'System Uptime',
      value: '99.8%',
      change: '-0.1%',
      trend: 'down',
      icon: Calendar,
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  const exportReport = () => {
    // Simulate report generation
    console.log('Generating comprehensive analytics report...');
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => {
          const IconComponent = kpi.icon;
          const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${kpi.color}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}
                  >
                    <TrendIcon className="h-3 w-3 mr-1" />
                    {kpi.change}
                  </Badge>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold">{kpi.value}</div>
                  <div className="text-sm text-gray-600">{kpi.title}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Analytics Charts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Advanced Analytics Dashboard</CardTitle>
              <CardDescription>
                Comprehensive insights into irrigation efficiency and crop performance
              </CardDescription>
            </div>
            <Button onClick={exportReport}>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="efficiency">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="efficiency">Water Efficiency</TabsTrigger>
              <TabsTrigger value="yield">Crop Yield</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
            </TabsList>

            <TabsContent value="efficiency" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={efficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="efficiency" 
                      stroke="#10B981" 
                      fill="#10B981" 
                      fillOpacity={0.3}
                      name="Efficiency (%)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="yield" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cropYieldData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="tomatoes" fill="#EF4444" name="Tomatoes (lbs)" />
                    <Bar dataKey="corn" fill="#F59E0B" name="Corn (lbs)" />
                    <Bar dataKey="lettuce" fill="#10B981" name="Lettuce (lbs)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={efficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="waterSaved" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      name="Water Saved (gallons)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="cost" 
                      stroke="#EF4444" 
                      strokeWidth={3}
                      name="Cost ($)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Insights Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Efficiency Gains</h4>
              <p className="text-sm text-green-700">
                Your irrigation efficiency has improved by 9% this month, saving 775 gallons 
                of water and reducing costs by $47.
              </p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Crop Performance</h4>
              <p className="text-sm text-blue-700">
                Tomato yield increased 18% compared to last season. Consider expanding 
                tomato cultivation in optimal zones.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedAnalytics;
