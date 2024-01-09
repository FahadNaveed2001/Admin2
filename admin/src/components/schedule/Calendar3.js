import React from 'react';

const Calendar3 = () => {
  return (
    <div className="flex items-center justify-center py-8 px-4 b">

      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
          <div className="px-4 flex items-center justify-between">
            <span tabIndex="0" className="focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800">12/March/2024</span>

          </div>
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
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
              <tbody>
                <tr>
                  <td className="pt-1">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>

                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-[#38bff828] rounded-b">
          <div className="px-4">
            <div className="border-b pb-4 border-gray-400 border-dashed">
              <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
              <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom call with design team</a>
              <p className="text-sm pt-2 text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar3;
