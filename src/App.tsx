
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Sensors from "./pages/Sensors";
import SmartSchedule from "./pages/SmartSchedule";
import Schedule from "./pages/Schedule";
import Fields from "./pages/Fields";
import Weather from "./pages/Weather";
import Analytics from "./pages/Analytics";
import Usage from "./pages/Usage";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="sensors" element={<Sensors />} />
            <Route path="smart-schedule" element={<SmartSchedule />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="fields" element={<Fields />} />
            <Route path="weather" element={<Weather />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="usage" element={<Usage />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
