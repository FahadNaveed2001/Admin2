import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import ChartIcon from './assets/Chart.png';
import ChatIcon from './assets/Chat.png';
import UserIcon from './assets/User.png';
import CalendarIcon from './assets/Calendar.png';
import FolderIcon from './assets/Folder.png';
import { IoSettings } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineCash } from "react-icons/hi";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
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
        { title: 'Link 1', link: '/notification-settings', icon: <IoNotifications /> },
        { title: 'Link 2', link: '/billing-settings', icon:  <HiOutlineCash /> },
      ],
    },
  ];

  const handleDropdownClick = () => {
    if (!isSidebarOpen) {
      toggleSidebar();
    }
  };

  return (
    <div className="flex bg-[#292929] h-[120vh] z-20 mt-">
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
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? 'mt-2' : ''
              } ${index === 0 && 'bg-light-white'}`}
              style={{ height: '40px' }}
            >
              {Menu.dropdown ? (
                <details>
                  <summary
                    className="flex items-center gap-x-2 cursor-pointer"
                    onClick={handleDropdownClick}
                  >
                    {Menu.icon}
                    {Menu.title}
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    {Menu.items.map((item, i) => (
                      <li key={i}>
                        <Link to={item.link} className="text-white flex items-center gap-x-2">
                          {item.icon}
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  to={Menu.link}
                  className="flex items-center gap-x-2 hover:translate-y-[-3px] duration-150 hover:text-[#38BDF8] text-[18px]"
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
