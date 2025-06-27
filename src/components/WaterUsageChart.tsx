
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Droplets, 
  Calendar,
  DollarSign
} from 'lucide-react';

const WaterUsageChart = () => {
  const weeklyData = [
    { day: 'Mon', usage: 450, cost: 12.50 },
    { day: 'Tue', usage: 380, cost: 10.60 },
    { day: 'Wed', usage: 520, cost: 14.40 },
    { day: 'Thu', usage: 340, cost: 9.40 },
    { day: 'Fri', usage: 490, cost: 13.60 },
    { day: 'Sat', usage: 410, cost: 11.40 },
    { day: 'Sun', usage: 360, cost: 10.00 }
  ];

  const monthlyData = [
    { month: 'Jan', usage: 8420, efficiency: 85 },
    { month: 'Feb', usage: 7890, efficiency: 88 },
    { month: 'Mar', usage: 9240, efficiency: 82 },
    { month: 'Apr', usage: 10560, efficiency: 79 },
    { month: 'May', usage: 12340, efficiency: 76 },
    { month: 'Jun', usage: 14200, efficiency: 73 }
  ];

  const fieldDistribution = [
    { name: 'North Field - Tomatoes', value: 45, color: '#10B981' },
    { name: 'South Field - Corn', value: 35, color: '#3B82F6' },
    { name: 'East Field - Lettuce', value: 20, color: '#F59E0B' }
  ];

  const totalUsage = weeklyData.reduce((sum, day) => sum + day.usage, 0);
  const totalCost = weeklyData.reduce((sum, day) => sum + day.cost, 0);
  const avgEfficiency = monthlyData.reduce((sum, month) => sum + month.efficiency, 0) / monthlyData.length;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">Weekly Usage</span>
            </div>
            <div className="text-2xl font-bold mt-1">{totalUsage.toLocaleString()} gal</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-600">Weekly Cost</span>
            </div>
            <div className="text-2xl font-bold mt-1">${totalCost.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-gray-600">Efficiency</span>
            </div>
            <div className="text-2xl font-bold mt-1">{avgEfficiency.toFixed(1)}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-purple-500" />
              <span className="text-sm text-gray-600">Active Days</span>
            </div>
            <div className="text-2xl font-bold mt-1">7/7</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Card>
        <CardHeader>
          <CardTitle>Water Usage Analytics</CardTitle>
          <CardDescription>
            Detailed analysis of water consumption and efficiency metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="weekly" className="space-y-4">
            <TabsList>
              <TabsTrigger value="weekly">Weekly Usage</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Trends</TabsTrigger>
              <TabsTrigger value="distribution">Field Distribution</TabsTrigger>
            </TabsList>

            <TabsContent value="weekly" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'usage' ? `${value} gallons` : `$${value}`,
                        name === 'usage' ? 'Water Usage' : 'Cost'
                      ]}
                    />
                    <Bar dataKey="usage" fill="#3B82F6" name="usage" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="usage" fill="#10B981" name="Usage (gallons)" />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="efficiency" 
                      stroke="#F59E0B" 
                      strokeWidth={3}
                      name="Efficiency (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="distribution" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={fieldDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${value}%`}
                      >
                        {fieldDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Water Distribution by Field</h4>
                  {fieldDistribution.map((field, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: field.color }}
                        />
                        <span className="text-sm font-medium">{field.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{field.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterUsageChart;
