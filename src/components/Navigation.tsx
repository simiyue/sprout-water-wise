
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  Activity, 
  Brain, 
  Calendar, 
  MapPin, 
  Cloud, 
  TrendingUp, 
  Droplets, 
  Bell 
} from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: BarChart3 },
    { path: '/sensors', label: 'Sensors', icon: Activity },
    { path: '/smart-schedule', label: 'Smart Schedule', icon: Brain },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/fields', label: 'Fields', icon: MapPin },
    { path: '/weather', label: 'Weather', icon: Cloud },
    { path: '/analytics', label: 'Analytics', icon: TrendingUp },
    { path: '/usage', label: 'Usage', icon: Droplets },
    { path: '/notifications', label: 'Alerts', icon: Bell },
  ];

  return (
    <nav className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex flex-wrap gap-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-green-100 text-green-700 border border-green-200'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`
            }
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
