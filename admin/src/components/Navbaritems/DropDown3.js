import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { MdQueryStats } from "react-icons/md";
import { ImParagraphJustify } from "react-icons/im";
import { ImStatsDots } from "react-icons/im";
import { SiGraphql } from "react-icons/si";
import { PiGraphBold } from "react-icons/pi";
import { ImParagraphLeft } from "react-icons/im";
import { MdOutlineGraphicEq } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { IoBarChart } from "react-icons/io5";
import { HiOutlineCash } from "react-icons/hi";

const Dropdown1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        type="button"
        className="btn bg-transparent hidden md:flex lg:flex border-none p-2 text-[20px] text-[#38BDF8] hover:bg-transparent hover:text-[#32718b]"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <div>
          <div className="absolute left-5 top-1 h-5 w-5 bg-red-500 rounded-full">
          <h1 className="text-sm text-white p-1 mt-[-4px] font-light">3</h1>
          </div>
          <div>
            <IoNotifications />
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 md:w-[500px] px-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >

    <div className="flex justify-between px-3 py-1 bg-[#38bff828] items-center gap-1 rounded-lg border border-gray-100 my-3">
        <div className="relative w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
                <img className="w-full h-full object-cover rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="" />
            </div>
        </div>
        <div>
            <span className="font-mono">Emma would like to connect with you</span>
        </div>
        <div className="flex gap-2">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
            </button>
        </div>
    </div>

    <div className="flex justify-between px-3 py-1 bg-[#38bff828] items-center gap-1 rounded-lg border border-gray-100 my-3">
        <div className="relative w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
                <img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
            </div>
        </div>
        <div>
            <span className="font-mono">Tom liked one of your comments</span>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>

    <div className="flex justify-between px-3 py-1 bg-[#38bff828] items-center gap-1 rounded-lg border border-gray-100 my-3">
        <div className="relative w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
                <img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>
            </div>
        </div>
        <div>
            <span className="font-mono">Andrea posted a new Tweet have a look</span>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
        </div>
    </div>
</div>

      )}
    </div>
  );
};

export default Dropdown1;
