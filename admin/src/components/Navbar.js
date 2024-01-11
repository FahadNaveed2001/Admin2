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







          <div className="flex-none items-center">
          <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className=" btn bg-transparent border-none p-2 text-[20px] text-[#38BDF8] hover:bg-transparent hover:text-[#32718b] ml-[-50px] md:ml-[0]"><IoSettings /></div>

          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[250px] ml-[-190px] mt-[10px] divide-y divide-slate-700 ">
            <li><a><Link to="/notification-settings"><IoNotifications />Notification Settings</Link></a></li>
            <li><a><Link to="/billing-settings"><HiOutlineCash />Billing Settings</Link></a></li>
          </ul>
        </div>
            <ul className="menu menu-horizontal text-[black] md:px-2 md:mx-5">
              <li className="text-[20px] mt-[-2px]">
                <div className="dropdown dropdown-bottom hover:bg-transparent ">
                  <div tabIndex={0} role="button" className="btn bg-transparent border-none p-2 text-[20px] text-[#38BDF8] hover:bg-transparent hover:text-[#32718b]  md:ml-[0]"><BsStack /></div>
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
              <li className="text-[20px] mt-[-2px]">
                <div className="dropdown dropdown-bottom hover:bg-transparent">
                  <div tabIndex={0} role="button" className="btn bg-transparent border-none p-2 text-[25px] text-[#38BDF8] hover:bg-transparent hover:text-[#32718b]"><IoNotifications /></div>

                  <ul tabIndex={0} className="dropdown-content  shadow bg-base-100 rounded-box ml-[-250px] mt-[10px]">
                    <li ><a className="hover:bg-[#33c2ff]"><div id="toast-notification" className="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
                      <div className="flex items-center mb-3">
                        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New notification</span>
                        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                          <span className="sr-only">Close</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <div className="relative inline-block shrink-0">
                          <img className="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese Leos image" />
                          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                            <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                              <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                              <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                            </svg>
                            <span className="sr-only">Message icon</span>
                          </span>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
                          <div className="text-sm font-normal">commented on your photo</div>
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                        </div>
                      </div>
                    </div></a></li>
                    <li><a className="hover:bg-[#33c2ff]"><div id="toast-notification" className="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
                      <div className="flex items-center mb-3">
                        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New notification</span>
                        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                          <span className="sr-only">Close</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <div className="relative inline-block shrink-0">
                          <img className="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese Leos image" />
                          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                            <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                              <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                              <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                            </svg>
                            <span className="sr-only">Message icon</span>
                          </span>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
                          <div className="text-sm font-normal">commented on your photo</div>
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                        </div>
                      </div>
                    </div></a></li>
                    <li><a className="hover:bg-[#33c2ff]"><div id="toast-notification" className="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
                      <div className="flex items-center mb-3">
                        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New notification</span>
                        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                          <span className="sr-only">Close</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <div className="relative inline-block shrink-0">
                          <img className="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese Leos image" />
                          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                            <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                              <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                              <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                            </svg>
                            <span className="sr-only">Message icon</span>
                          </span>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
                          <div className="text-sm font-normal">commented on your photo</div>
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                        </div>
                      </div>
                    </div></a></li>

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
