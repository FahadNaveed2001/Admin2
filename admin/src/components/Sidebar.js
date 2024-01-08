import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";


const Sidebar = () => {
  return (

    <div className=" flex w-[200px] p-2 flex-col items-start mt-[-10vh] bg-white fixed h-[103vh] drop-shadow-xl border-r-2">
    <ul className='mt-[10vh] w-[160px] gap-[20px]'>
    <li className='text-[20px] hover:bg-gray-300 p-3 transition duration-300 ease-in-out rounded-2xl'><a className='flex flex-row'><MdDashboard /><h1 className='mt-[-5px] ml-2'>Home</h1></a></li>
    <li className='text-[20px] mt-4 p-3 hover:bg-gray-300 transition duration-300 ease-in-out rounded-2xl'><a className='flex flex-row'><MdDashboard /><h1 className='mt-[-5px] ml-2'>Home</h1></a></li>
    <li className='text-[20px] mt-4 hover:bg-gray-300 p-3 transition duration-300 ease-in-out rounded-2xl'><a className='flex flex-row'><MdDashboard /><h1 className='mt-[-5px] ml-2'>Charts</h1></a></li>
    <li className='text-[20px] mt-4 hover:bg-gray-300 p-3 transition duration-300 ease-in-out rounded-2xl'><a className='flex flex-row'><MdDashboard /><h1 className='mt-[-5px] ml-2'>Accounts</h1></a></li>
    <li className='text-[20px] mt-4 hover:bg-gray-300 p-3 transition duration-300 ease-in-out rounded-2xl'><a className='flex flex-row'><MdDashboard /><h1 className='mt-[-5px] ml-2'>Status</h1></a></li>
    <li className='text-[20px] mt-4 hover:bg-gray-300 p-3 transition duration-300 ease-in-out rounded-2xl'><a className='flex flex-row'><MdDashboard /><h1 className='mt-[-5px] ml-2'>Settings</h1></a></li>

  
    </ul>
    
    </div>

  );
};

export default Sidebar;
