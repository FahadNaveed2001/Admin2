import React from "react";
import { FaFolder } from "react-icons/fa";
import { SiGoogledrive } from "react-icons/si";
import { IoLogoDropbox } from "react-icons/io5";

const Files = () => {
  return (
    <div className="flex flex-col lg:w-screen md:w-screen overflow-hidden">
      <div className="flex flex-col font-bold text-[30px] w-screen md:flex-row items-center p-4 lg:w-screen md:w-screen md:text-[50px] lg:text-[50px]">
        File Manager
      </div>
      <div className="flex flex-col w-screen md:flex-row items-center p-4 lg:w-screen md:w-screen">
        <button class="bg-[#38BDF8] text-black font-bold py-2 px-4 rounded opacity-100 cursor-not-allowed">
          Add File +
        </button>
      </div>

      <div className="flex flex-col pr-[20px] w-screen md:flex-row items-center p-1 lg:w-screen md:w-screen lg:pr-[100px] md:pr-[100px]">
        <div className="flex-1 p-2 md:w-1/3 w-full">
          {" "}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 ">
            <div className="flex flex-row bg-[#38bff828] shadow-lg text-black rounded-2xl p-4 transition ease-in-out delay-150  duration-100">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                <FaFolder />
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-md text-black">Your Files</div>
                <progress
                  className="progress w-[screen] mt-1"
                  value="80"
                  max="100"
                ></progress>
                <div className="font-bold text-lg">
                  24GB<span className="font-semibold text-sm">/30GB</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 md:w-1/3 w-full">
          {" "}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 ">
            <div className="flex flex-row bg-[#38bff828] shadow-lg text-black rounded-2xl p-4 transition ease-in-out delay-150  duration-100">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                <SiGoogledrive />
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-md text-black">Google Drive Files</div>
                <progress
                  className="progress w-[screen] mt-1"
                  value="20"
                  max="100"
                ></progress>
                <div className="font-bold text-lg">
                  4GB<span className="font-semibold text-sm">/20GB</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 md:w-1/3 w-full">
          {" "}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 ">
            <div className="flex flex-row bg-[#38bff828] shadow-lg text-black rounded-2xl p-4 transition ease-in-out delay-150  duration-100">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                <IoLogoDropbox />
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-md text-black">DropBox Files</div>
                <progress
                  className="progress w-[screen] mt-1"
                  value="52"
                  max="100"
                ></progress>
                <div className="font-bold text-lg">
                  31GB<span className="font-semibold text-sm">/60GB</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Div 2 */}
      <div className=" p-1 h-[100vh] bg-white w-[390px] lg:w-[1100px] xl:w-[1750px]">
        <div className="overflow-x-auto">
          <table className="table table-xs text-[black] mt-6 ">
            {" "}
            <thead>
              <td className="text-center font-semibold">File Name</td>
              <td className="text-center font-semibold">Upload Date</td>
              <td className="text-center font-semibold">Size</td>
              <td className="text-center font-semibold"></td>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2 text-center text-sm">Balls</td>
                <td className="border-b py-2 text-center text-sm">28/4/2023</td>
                <td className="border-b py-2 text-center text-sm">1.6 GB</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-center text-sm">Shirts</td>
                <td className="border-b py-2 text-center text-sm">2/5/2023</td>
                <td className="border-b py-2 text-center text-sm">5.7 GB</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-center text-sm">Drones</td>
                <td className="border-b py-2 text-center text-sm">5/5/2023</td>
                <td className="border-b py-2 text-center text-sm">8.1 GB</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-center text-sm">Pants</td>
                <td className="border-b py-2 text-center text-sm">22/5/2023</td>
                <td className="border-b py-2 text-center text-sm">1.8GB</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-center text-sm">Shoes</td>
                <td className="border-b py-2 text-center text-sm">25/5/2023</td>
                <td className="border-b py-2 text-center text-sm">3GB</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-center text-sm">Bats</td>
                <td className="border-b py-2 text-center text-sm">28/5/2023</td>
                <td className="border-b py-2 text-center text-sm">2.5GB</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-center text-sm">Phones</td>
                <td className="border-b py-2 text-center text-sm">29/5/2023</td>
                <td className="border-b py-2 text-center text-sm">6.3GB</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-center text-sm">Chargers</td>
                <td className="border-b py-2 text-center text-sm">12/6/2023</td>
                <td className="border-b py-2 text-center text-sm">1.6GB</td>
              </tr>
              <tr>
                <td className="border-b py-2 text-center text-sm">Pods</td>
                <td className="border-b py-2 text-center text-sm">15/6/2023</td>
                <td className="border-b py-2 text-center text-sm">GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Files;
