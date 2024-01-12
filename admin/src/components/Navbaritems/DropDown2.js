import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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


const Dropdown2 = () => {
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
      <BsStack />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lgring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="grid grid-cols-3 gap-8 dropdown-content z-[1] menu p-5 shadow bg-base-100 rounded-box w-[250px] items-center" role="none">
          <li>
          <a className="text-[25px] text-[#6B7280] items-center">
            <IoStatsChart />
          </a>
        </li>
        <li>
          <a className="text-[25px] text-[#6B7280] items-center">
            <TfiStatsUp />
          </a>
        </li>
        <li>
          <a className="text-[25px] text-[#6B7280] items-center">
            <MdQueryStats />
          </a>
        </li>
        <li>
          <a className="text-[25px] text-[#6B7280] items-center">
            <ImParagraphJustify />
          </a>
        </li>
        <li>
          <a className="text-[25px] text-[#6B7280] items-center">
            <ImStatsDots />
          </a>
        </li>
        <li>
          <a className="text-[25px] text-[#6B7280] items-center">
            <SiGraphql />
          </a>
        </li>
        <li>
          <a className="text-[25px] text-[#6B7280] items-center">
            <PiGraphBold />
          </a>
        </li>
        <li>
          <a className="text-[25px] text-[#6B7280] items-center">
            <ImParagraphLeft />
          </a>
        </li>
        <li>
          <a className="text-[25px] text-[#6B7280] items-center">
            <MdOutlineGraphicEq />
          </a>
        </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
