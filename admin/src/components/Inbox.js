import React from "react";

const Inbox = () => {
  return (
    <div className="ml-[20px] flex flex-col overflow-hidden">
      <h1 className="text-[20px] font-bold text-center pt-4 px-6 md:text-start md:text-[50px]">Inbox</h1>
      <main className="flex w-full h-full shadow-lg rounded-3xl items-center md:w-[98%]">
        <section className="flex flex-col pt-3 w-[500px] bg-[#38bff80e] h-full lg:w-screen md:w-screen md:items-center]">
          <label className="px-3">
            <input
              className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
              placeholder="Search..."
            />
          </label>

          <ul className="mt-6">
            <li className="py-5 border-b px-3 transition hover:bg-[#38bff83d] ">
              <a href="#" className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                <p className="text-md text-gray-400">23m ago</p>
              </a>
              <div className="text-md italic text-gray-400">
                You have been invited!
              </div>
            </li>
            <li className="py-5 border-b px-3 transition hover:bg-[#38bff83d] ">
              <a href="#" className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                <p className="text-md text-gray-400">23m ago</p>
              </a>
              <div className="text-md italic text-gray-400">
                You have been invited!
              </div>
            </li>
            <li className="py-5 border-b px-3 transition hover:bg-[#38bff83d] ">
              <a href="#" className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                <p className="text-md text-gray-400">23m ago</p>
              </a>
              <div className="text-md italic text-gray-400">
                You have been invited!
              </div>
            </li>
            <li className="py-5 border-b px-3 transition hover:bg-[#38bff83d] ">
              <a href="#" className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                <p className="text-md text-gray-400">23m ago</p>
              </a>
              <div className="text-md italic text-gray-400">
                You have been invited!
              </div>
            </li>
            <li className="py-5 border-b px-3 transition hover:bg-[#38bff83d] ">
              <a href="#" className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                <p className="text-md text-gray-400">23m ago</p>
              </a>
              <div className="text-md italic text-gray-400">
                You have been invited!
              </div>
            </li>
            <li className="py-5 border-b px-3 transition hover:bg-[#38bff83d] ">
              <a href="#" className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                <p className="text-md text-gray-400">23m ago</p>
              </a>
              <div className="text-md italic text-gray-400">
                You have been invited!
              </div>
            </li>
            <li className="py-5 border-b px-3 transition hover:bg-[#38bff83d] ">
              <a href="#" className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                <p className="text-md text-gray-400">23m ago</p>
              </a>
              <div className="text-md italic text-gray-400">
                You have been invited!
              </div>
            </li>
            <li className="py-5 border-b px-3 transition hover:bg-[#38bff83d] ">
              <a href="#" className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                <p className="text-md text-gray-400">23m ago</p>
              </a>
              <div className="text-md italic text-gray-400">
                You have been invited!
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Inbox;
