import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Accounts from './components/Accounts';
import Charts from './components/Charts';
import Sidebar from './components/Sidebar';
import Inbox from './components/Inbox';
import Schedule from './components/Schedule';
import Files from './components/Files';
import NotificationSettings from "./components/Settings/NotificationSettings";
import BillingSettings from "./components/Settings/BillingSettings";
import Tester from "./components/Tester";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark bg-gray-900' : 'light'} bg-${isDarkMode ? 'bg-gray-900' : 'white'} text-${isDarkMode ? 'white' : 'black'} transition-colors`}>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} toggleDarkMode={toggleDarkMode} />

        <div className="flex">
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/files" element={<Files />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/notification-settings" element={<NotificationSettings />} />
            <Route path="/billing-settings" element={<BillingSettings />} />
            <Route path="/tester" element={<Tester />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
