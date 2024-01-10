import React from 'react';
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
import TeamSettings from "./components/Settings/TeamSettings";

const App = () => {
  return (
    <Router>
    <Navbar />
 
      <div className='h-screen flex bg-white overflow-x-hidden'>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inbox" element={<Inbox/>} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/files" element={<Files/>} />

          <Route path="/accounts" element={<Accounts />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/team-settings" element={<TeamSettings/>} />
          <Route path="/notification-settings" element={<NotificationSettings/>} />
          <Route path="/billing-settings" element={<BillingSettings/>} />
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
