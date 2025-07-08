
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Settings,
  CheckCircle,
  Bell,
  Brain
} from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Droplets className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SmartIrrigate Pro</h1>
              <p className="text-sm text-gray-600">AI-Powered Intelligent Farming Solutions</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-green-600 border-green-200">
              <CheckCircle className="h-3 w-3 mr-1" />
              System Online
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              <Brain className="h-3 w-3 mr-1" />
              AI Active
            </Badge>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              <span className="bg-red-500 text-white text-xs rounded-full px-1 ml-1">3</span>
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
