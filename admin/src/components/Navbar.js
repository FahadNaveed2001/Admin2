import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}

        <div className="w-full navbar bg-[#1C2C52] drop-shadow-xl rounded-b-3xl">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>{" "}
            </label>
          </div>
          <div className="flex-1 px-7 mx-10 text-[white] text-[30px] font-semibold">
            Admin.com
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal text-[white] px-7 mx-10">
              <li className="text-[20px]">
                <Link to="/" className="nav-link hover:text-[#38BDF8]">
                  Home
                </Link>
              </li>
              <li className="text-[20px]">
                <Link to="/charts" className="nav-link hover:text-[#38BDF8] ">
                  Charts
                </Link>
              </li>
              <li className="text-[20px]">
                <Link to="/accounts" className="nav-link hover:text-[#38BDF8] ">
                  Accounts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar */}

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full backdrop-blur text-[white] rounded-r-3xl ">
          <li className="mb-8 hover:bg-[#38BDF8] hover:rounded-md mt-14 text-[15px]">
            <Link to="/">Home</Link>
          </li>
          <li className=" mb-8 hover:bg-[#38BDF8] hover:rounded-md text-[15px]">
            <Link to="/charts">Charts</Link>
          </li>
          <li className="mb-8 hover:bg-[#38BDF8] hover:rounded-md text-[15px]">
            <Link to="/accounts">Accounts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
