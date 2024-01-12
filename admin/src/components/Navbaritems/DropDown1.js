import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
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

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        type="button"
        className="btn bg-transparent hidden md:flex lg:flex border-none p-2 text-[20px] text-[#38BDF8] hover:bg-transparent hover:text-[#32718b] ml-[-50px] md:ml-[0]"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
      <IoSettings />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lgring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[250px] divide-y divide-slate-700" role="none">
          <Link to="/notification-settings"
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex flex-row items-center"
              onClick={closeDropdown}
            >
            <IoNotifications />
            Notification Settings
            </Link>
            <Link
              to="/billing-settings"
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex flex-row items-center"
              onClick={closeDropdown}
            >
            <HiOutlineCash />
            Billing Settings
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown1;
