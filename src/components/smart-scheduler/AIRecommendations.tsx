
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp } from 'lucide-react';

interface AIRecommendation {
  field: string;
  recommendation: string;
  confidence: number;
  waterSaving: string;
  impact: 'High' | 'Medium' | 'Low';
}

interface AIRecommendationsProps {
  recommendations: AIRecommendation[];
}

const AIRecommendations = ({ recommendations }: AIRecommendationsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="h-5 w-5 mr-2 text-yellow-500" />
          Current AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium">{rec.field}</h4>
                  <p className="text-sm text-gray-600 mt-1">{rec.recommendation}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge 
                    variant="outline" 
                    className={
                      rec.impact === 'High' ? 'text-red-600 border-red-200' :
                      rec.impact === 'Medium' ? 'text-yellow-600 border-yellow-200' :
                      'text-green-600 border-green-200'
                    }
                  >
                    {rec.impact} Impact
                  </Badge>
                  <div className="text-xs text-gray-500">
                    {rec.confidence}% confidence
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {rec.waterSaving} water savings
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    Apply
                  </Button>
                  <Button size="sm" variant="ghost">
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
