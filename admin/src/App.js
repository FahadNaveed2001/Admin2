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
import Settings from './components/Settings';

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
          <Route path="/settings" element={<Settings/>} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
