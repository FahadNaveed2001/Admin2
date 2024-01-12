import React from "react";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { IoBarChart } from "react-icons/io5";
import { HiOutlineCash } from "react-icons/hi";
import Dropdown1 from "./Navbaritems/DropDown1";
import Dropdown2 from "./Navbaritems/DropDown2";
import Dropdown3 from "./Navbaritems/DropDown3";
import Dropdown4 from "./Navbaritems/DropDown4";
import { BiLogOutCircle } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";


const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        
        
        <div className="navbar bg-[white] h-[7vh] z-3 border-b-2">
          
          
          {/*sidebar open button*/}
          <button
            onClick={toggleSidebar}
            aria-label="toggle sidebar"
            className="btn btn-square btn-ghost hidden md:flex lg:flex text-[30px] ml-[.7%] text-[#38BDF8]"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="flex-none lg:hidden md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current text-[#38BDF8]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-3 text-[#38BDF8] text-[20px] font-bold md:text-[30px] md:px-7">
            Admin.com
            <form className="ml-[10px] items-center display-none hidden md:flex lg:flex">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="h-[35px] w-[100px] md:w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
              </div>
              <button
                type="submit"
                className=" p-2.5 ms-2 text-sm font-medium text-white bg-[#38BDF8] rounded-lg border transition duration-300 ease-in-out hover:bg-[#226581] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

          <div className="flex items-center gap-3">
            <div>
              <Dropdown1 />
            </div>
            <div>
              <Dropdown2 />
            </div>
            <div>
              <Dropdown3 />
            </div>
            <div className="mt-[-10px]">
              <Dropdown4 />
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu py-[70px] w-60 min-h-full bg-[#292929ec]  text-white gap-2 ">
          <li>
            {" "}
            <div className="avatar flex flex-col">
              <div className="w-[100px] rounded-full ring ring-[#38BDF8] ring-offset-base-100 ring-offset-2 mt-[5px] ">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <h1>User@gmail.com</h1>
              <div className="border-b-2 border-white w-[100px] h-1"></div>
            </div>
          </li>
          <li className="flex flex-row">
            <a>
              <Link to="/" className="flex gap-2">
                <RiDashboardFill className="mt-[5px]" />
                Dashboard
              </Link>
            </a>
          </li>
          <li className="flex flex-row">
            <a>
              <Link to="/accounts" className="flex gap-2">
                <MdSwitchAccount className="mt-[5px]" />
                Accounts
              </Link>
            </a>
          </li>
          <li className="flex flex-row">
            <a>
              <Link to="/inbox" className="flex gap-2">
                <MdOutlineForwardToInbox className="mt-[5px]" />
                Inbox
              </Link>
            </a>
          </li>
          <li className="flex flex-row">
            <a>
              <Link to="/schedule" className="flex gap-2">
                <BiSpreadsheet className="mt-[5px]" />
                Schedule
              </Link>
            </a>
          </li>
          <li className="flex flex-row">
            <a>
              <Link to="/charts" className="flex gap-2">
                <IoBarChart className="mt-[5px]" />
                Analytics
              </Link>
            </a>
          </li>


          <li>
          <details>
          <summary>
          <IoSettings /> Settings
          </summary>
          <ul className="bg-transparent rounded-t-none  ">
          <li className="flex flex-row">
            <a>
              <Link to="/notification-settings" className="flex gap-2">
                <IoNotifications className="mt-[5px]" />
                Notification Settings
              </Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/billing-settings" className="flex gap-2">
                <HiOutlineCash className="mt-[5px]" />
                Billing Settings
              </Link>
            </a>
          </li>
          </ul>
        </details>
          </li>

          <li className="mt-[100%]">
            <a>
              <Link to="/Logout" className="flex gap-2">
                <BiLogOutCircle className="mt-[5px]" />
                Logout
              </Link>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
