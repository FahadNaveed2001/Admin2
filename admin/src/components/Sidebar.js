import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ChartIcon from './assets/Chart.png';
import ChatIcon from './assets/Chat.png';
import UserIcon from './assets/User.png';
import CalendarIcon from './assets/Calendar.png';
import FolderIcon from './assets/Folder.png';
import { IoSettings } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineCash } from "react-icons/hi";
import { motion } from 'framer-motion';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const Menus = [
    { title: 'Dashboard', src: ChartIcon, link: '/' },
    { title: 'Accounts', src: UserIcon, gap: true, link: '/accounts' },
    { title: 'Inbox', src: ChatIcon, link: '/inbox' },
    { title: 'Schedule', src: CalendarIcon, link: '/schedule' },
    { title: 'Analytics', src: ChartIcon, link: '/charts' },
    { title: 'Files', src: FolderIcon, gap: true, link: '/files' },
    // Dropdown Menu
    {
      title: 'Settings',
      dropdown: true,
      icon:  <IoSettings />,
      items: [
        { title: 'Notification', link: '/notification-settings', icon: <IoNotifications /> },
        { title: 'Billings', link: '/billing-settings', icon:  <HiOutlineCash /> },
      ],
    },
  ];

  const handleDropdownClick = () => {
    if (!isSidebarOpen) {
      toggleSidebar();
    }
  };

  return (
    <div className="flex bg-[#292929] h-[120vh] z-20 mt-[50px]">
      <div
        className={`${
          isSidebarOpen ? 'w-52' : 'hidden md:w-20'
        } p-4 pt-8 relative duration-300 md:block`}
      >
        <div
          className={`absolute cursor-pointer translate-x-[9px] translate-y-[5px]  text-[#38BDF8] mt-[-20px] ml-[3px] bg-white md:hidden lg:hidden`}
          onClick={toggleSidebar}
        >
          <FaBars />
        </div>
        <ul className="pt-6 fixed">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4 ${
                Menu.gap ? 'mt-2' : ''
              } ${index === 0 && 'bg-light-white'} ${
                location.pathname === Menu.link ? 'bg-gray-500' : ''
              }`}
              style={{ height: '40px' }}
            >
              {Menu.dropdown ? (
                
                <details>
                  <summary
                    className="flex items-center gap-x-2 cursor-pointer px-[1.4px] fixed top-[375px]"
                    onClick={handleDropdownClick}
                  >
                    <div className='text-[13px] p-[2px] text-[#38BDF8] border-solid border-2 border-[#dadada] rounded-md'>{Menu.icon}</div>
                    <div className='text-[18px]'>{isSidebarOpen && Menu.title}</div>
                  </summary>
                  {isSidebarOpen && <ul className="p-2 bg-transparent rounded-t-none mt-[120px]">
                    {Menu.items.map((item, i) => (
                      <motion.li key={i} >
                        <Link to={item.link} className={`text-white flex items-center gap-x-3 mt-[5px] px-3 rounded-lg ${
                          location.pathname === item.link ? 'bg-gray-500' : ''
                        }`}>
                          <div className='text-[17px] text-[#38BDF8]'>{item.icon}</div>
                          <div className='text-[15px] p-2'>{item.title}</div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>}
                </details>
              ) : (
                <Link
                  to={Menu.link}
                  className={`flex items-center gap-x-2 hover:translate-y-[-3px] duration-150 hover:text-[#38BDF8] text-[18px] ${
                    location.pathname === Menu.link ? 'hover:bg-gray-500' : ''
                  }`}
                >
                  <img src={Menu.src} alt={Menu.title} />
                  <span className={`${!isSidebarOpen && 'hidden'} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
