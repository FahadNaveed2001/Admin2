
import React, { useState } from 'react';




function Tester() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`bg-${isDarkMode ? 'black' : 'white'} text-${isDarkMode ? 'white' : 'black'} min-h-screen flex items-center justify-center transition-colors`}>
<h1 className='md:mt-[-2px]'>DarkMode</h1><input type="checkbox" className="toggle toggle-sm toggle-info   hover:bg-[#38BDF8] border-[#38BDF8] " onClick={toggleDarkMode}/>
      <p className="mt-4">Your app content goes here.</p>
    </div>
  );
}

export default Tester;
