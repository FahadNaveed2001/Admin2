import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Accounts from './components/Accounts';
import Charts from './components/Charts';

import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
    <Navbar />
 
      <div className='h-[120vh] flex bg-white'>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
