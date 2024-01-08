import React from "react";
import profileImage from '../Images/profile.png';


const Dashboard = () => {
  return (
    <div className="p-4 h-screen bg-white">
      <div className="mx-5 text-[white] text-[50px] font-bold">
        <h1>Home</h1>
      </div>
      <div className="p-4 grid grid-cols-1 gap-6 md:grid-cols-4 md:h-80">
      <div className="bg-[#1C2C52] p-8 text-white rounded-3xl flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
        <div className="flex-shrink-0 pr-4">
          <img src={profileImage} alt="Profile" className="rounded-full h-[150px]" />
        </div>
        <div className="flex-grow">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">John Doe</h2>
          </div>
          <div className="mb-2">
            <p>Email: 1234@example.com</p>
          </div>
          <div className="mb-2">
            <p>Phone: +12345679</p>
          </div>
          <div>
            <p>Address: 123 Main St, Pakistan</p>
          </div>
        </div>
      </div>
    
      <div className="bg-[#1C2C52] p-8 text-white col-span-1 md:col-span-3 rounded-3xl flex transition ease-in-out delay-150">
        <h3 className="text-[20px]">
          Is there an 'echo' of the big bang? The story of the prediction, serendipitous discovery and interpretation of the microwave radiation left over from the hot early beginnings of the universe. This radiation contains a wealth of information about the history and structure of the universe. It tells us its shape. It reveals the nature of the small lumps that eventually turned into galaxies. It tells us how fast we are moving. It events tells us about irregularities which no longer exist. In recent years there have been spectacular space missions to map this radiation with unprecedented accuracy and in the next year a new European PLANCK mission will be launched.
        </h3>
      </div>
    </div>
    
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:h-48">
      <div className="bg-[#1C2C52] p-8 text-white rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
        Dive into what a dashboard is and why its important for app marketers. We explore the uses of a dashboard and share a peek into Adjusts dashboards.
      </div>
      <div className="bg-[#1C2C52] p-8 text-white rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
        In addition to the above, a dashboard can be particularly useful when it provides data in real time, automatically updating with the latest information. Having real-time data is pertinent to many businesses, especially app marketers who desire to optimize their campaigns as fast as possible for maximum success.
      </div>
    </div>
    
        




        <div className="flex items-center bg-transparent text-white ">
        <div className="p-4 w-full">
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 sm:col-span-6 md:col-span-3 ">
              <div className="flex flex-row bg-[#1C2C52] shadow-sm text-white rounded-3xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-white">Users</div>
                  <div className="font-bold text-lg">1259</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-[#1C2C52] shadow-sm text-white rounded-3xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-white">Orders</div>
                  <div className="font-bold text-lg">230</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-[#1C2C52] shadow-sm text-white rounded-3xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-white">New Clients</div>
                  <div className="font-bold text-lg">190</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-[#1C2C52] shadow-sm text-white rounded-3xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4 ">
                <div className="text-sm text-white">Revenue</div>
                  <div className="font-bold text-lg">$ 32k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
