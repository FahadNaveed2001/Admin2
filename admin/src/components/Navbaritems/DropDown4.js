import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiLogOutCircle } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";



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
        className="btn bg-transparent hidden md:flex lg:flex border-none text-[20px] text-[#38BDF8] hover:bg-transparent hover:text-[#32718b] mt-[5px]"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
      <div className="avatar">
      <div className="w-8 rounded-full ring ring-[#38BDF8] ring-offset-base-100 ring-offset-2 mt-[5px]">
        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lgring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="dropdown-content z-[5] menu p-2 shadow bg-base-100 rounded-b-lg w-52 divide-y divide-slate-700 " role="none">
          <li>
          <a className="text-[20px]">User@gmail.com</a>
        </li>
        <li>
          <a className="mt-[20px]"><IoMdSettings />Settings</a>
        </li>
        <li>
          <a><HiInformationCircle />Information</a>
        </li>
        <li>
          <a><BiLogOutCircle />Logout</a>
        </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown1;
