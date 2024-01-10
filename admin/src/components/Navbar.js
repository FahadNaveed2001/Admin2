import React from "react";
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
import { RiTeamFill } from "react-icons/ri";
import { HiOutlineCash } from "react-icons/hi";


const Navbar = () => {




  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-[white] h-[7vh] z-10 border-b-2">
          <div className="flex-none">
          </div>
          <div className="flex-1 px-7 text-[#38BDF8] text-[30px] font-bold">
            Admin.com


            <form className="ml-[30px] flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full ">

              <input
                type="text"
                id="simple-search"
                className="h-[35px] mt-[10px] w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
            <button
              type="submit"
              className="mt-[10px] p-2.5 ms-2 text-sm font-medium text-white bg-[#38BDF8] rounded-lg border transition duration-300 ease-in-out hover:bg-[#226581] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
          </div>





          <div className="dropdown dropdown-bottom hover:bg-transparent">
          <div tabIndex={0} role="button" className="btn bg-transparent border-none p-2 text-[25px] text-[#38BDF8] hover:bg-transparent hover:text-[#32718b]"><IoSettings /></div>
    
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[250px] ml-[-320px] mt-[10px] divide-y divide-slate-700 ">
            <li><a><Link to="/notification-settings"><IoNotifications />Notification Settings</Link></a></li>
            <li><a><Link to="/billing-settings"><HiOutlineCash />Billing Settings</Link></a></li>
          </ul>
        </div>
          
          <div className="flex-none hidden lg:block align items-center">
            <ul className="menu menu-horizontal text-[black] px-2 mx-5">
              <li className="text-[20px] mt-[-2px]">
              <div className="dropdown dropdown-bottom hover:bg-transparent ">
              <div tabIndex={0} role="button" className="btn bg-transparent border-none p-2 text-[20px] text-[#38BDF8] hover:bg-transparent hover:text-[#32718b]"><BsStack /></div>
              <ul tabIndex={0} className="grid grid-cols-3 gap-8 dropdown-content z-[1] menu p-5 shadow bg-base-100 rounded-box w-[300px] ml-[-220px] mt-[10px] items-center ">
            
                <li><a className="text-[25px] text-[#6B7280] items-center"><IoStatsChart /></a></li>
                <li><a className="text-[25px] text-[#6B7280] items-center"><TfiStatsUp /></a></li>
                <li><a className="text-[25px] text-[#6B7280] items-center"><MdQueryStats /></a></li>
                <li><a className="text-[25px] text-[#6B7280] items-center"><ImParagraphJustify /></a></li>
                <li><a className="text-[25px] text-[#6B7280] items-center"><ImStatsDots /></a></li>
                <li><a className="text-[25px] text-[#6B7280] items-center"><SiGraphql /></a></li>
                <li><a className="text-[25px] text-[#6B7280] items-center"><PiGraphBold /></a></li>
                <li><a className="text-[25px] text-[#6B7280] items-center"><ImParagraphLeft /></a></li>
                <li><a className="text-[25px] text-[#6B7280] items-center"><MdOutlineGraphicEq /></a></li>

              </ul>
            </div>
              </li>
              <li  className="text-[20px] mt-[-2px]">
              <div className="dropdown dropdown-bottom hover:bg-transparent">
              <div tabIndex={0} role="button" className="btn bg-transparent border-none p-2 text-[25px] text-[#38BDF8] hover:bg-transparent hover:text-[#32718b]"><IoNotifications /></div>
        
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[400px] ml-[-320px] mt-[10px] divide-y divide-slate-700 ">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>

            

              </li>
              <li>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="">
                <div className="avatar">
                <div className="w-8 rounded-full ring ring-[#38BDF8] ring-offset-base-100 ring-offset-2 mt-[5px]">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
                </div>
                <ul
                  tabIndex={5}
                  className="dropdown-content z-[5] menu p-2 shadow bg-base-100 rounded-b-lg w-52 mt-[235px] divide-y divide-slate-700 "
                >
                <li>
                <a className="text-[20px]">User@gmail.com</a>
              </li>
                  <li>
                    <a className="mt-[20px]">Settings</a>
                  </li>
                  <li>
                    <a>information</a>
                  </li>
                  <li>
                  <a>Logout</a>
                </li>
                </ul>
              </div>
            </li>
            </ul>
          </div>
        </div>
      </div>


 
    </div>
  );
};

export default Navbar;
