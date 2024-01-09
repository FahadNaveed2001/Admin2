import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChartIcon from './assets/Chart.png'; 
import ChatIcon from './assets/Chat.png';
import UserIcon from './assets/User.png';
import CalendarIcon from './assets/Calendar.png';
import SearchIcon from './assets/Search.png';
import FolderIcon from './assets/Folder.png';
import SettingIcon from './assets/Setting.png';
import { FaBars } from "react-icons/fa";


const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", src: ChartIcon, link: "/" },
    { title: "Accounts", src: UserIcon, gap: true, link: "/accounts" },
    { title: "Inbox", src: ChatIcon, link: "/inbox" },
    { title: "Schedule", src: CalendarIcon, link: "/schedule" },
    { title: "Analytics", src: ChartIcon, link: "/charts" },
    { title: "Files", src: FolderIcon, gap: true, link: "/files" },
    { title: "Setting", src: SettingIcon, link: "/settings" },
  ];

  return (
    <div className="flex bg-[#292929] h-full">
      <div
        className={` ${
          open ? "w-52" : "w-20 "
        }  p-4  pt-8 relative duration-300 `}
      >

          <div
            
            className={`absolute cursor-pointer p-2 w-7 text-[white] mt-[-20px] ml-[3px]
          `}
            onClick={() => setOpen(!open)}
          >
          <FaBars />
          </div>


        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
            >
              <Link to={Menu.link} className="flex items-center gap-x-2 hover:translate-y-[-3px] duration-150 hover:text-[#38BDF8] text-[18px]">
                <img src={Menu.src} alt={Menu.title} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;