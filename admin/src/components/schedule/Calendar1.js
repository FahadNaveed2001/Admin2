import React from 'react';

const Calendar4 = () => {
  return (
    <div className="flex items-center justify-center py-7 px-4 ">

      <div className="max-w-sm w-full shadow-lg ">
        <div className="md:p-8 p-3 dark:bg-gray-800 bg-white rounded-t">
          <div className="px-4 flex items-center text-center">
            <span tabIndex="0" className="font-bold text-gray-800 ">12/March/2024</span>

          </div>
          <div className="flex items-center  pt-1 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-[30px] font-Bold text-center text-gray-800 dark:text-gray-100">Monday</p>
                    </div>
                  </th>

                </tr>
              </thead>

            </table>
          </div>
        </div>
        <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-[#38bff828] rounded-b">
          <div className="px-4">
            <div className="border-b pb-4 border-gray-400 border-dashed">
              <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
              <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom call with Design team</a>
              <p className="text-sm pt-2 text-gray-600 dark:text-gray-300">Discussion on Design an their review</p>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar4;
