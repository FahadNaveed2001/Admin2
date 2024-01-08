import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Accounts from './components/Accounts';
import Charts from './components/Charts';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div className='h-[120vh] bg-[#0F172A]'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
