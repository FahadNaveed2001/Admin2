import React, { useState } from 'react';

const NotificationSettings = () => {



  const [notificationOptions, setNotificationOptions] = useState({
    push: true,
    email: true,
    sms: false,
  });

  const handleCheckboxChange = (option) => {
    setNotificationOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };
  return (
    <div className="min-h-screen w-[400] pr-2">


    <h1 className="border-b py-6 text-4xl font-semibold text-center md:text-start lg:text-start">Settings</h1>
    <div className="w-screen md:flex-row items-center lg:w-screen md:w-screen  md:pr-[80px] lg:pr-[80px] ">
      <div className="relative my-4 w-56 sm:hidden">
        <input
          className="peer hidden"
          type="checkbox"
          name="select-1"
          id="select-1"
        />
        <label
          htmlFor="select-1"
          className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
        >
          Notifications
        </label>


      </div>

      <div className="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-8 shadow">
        <div className="border-b pt-4 pb-8">
          <h1 className="py-2 text-2xl font-semibold">Notification settings</h1>
          <p className="font- text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid border-b py-6 sm:grid-cols-2">
        </div>
        <div className="grid border-b py-6 sm:grid-cols-2">
          <div className="">
            <h2 className="text-lg font-bold leading-4 text-slate-700">
              Comments
            </h2>
            <p className="font- text-slate-600">
              Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis
              neque.
            </p>
          </div>
          <div className="mt-4 flex items-center sm:justify-end">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="push"
                className="relative inline-flex cursor-pointer items-center"
              >
                <input
                  type="checkbox"
                  id="push"
                  className="peer sr-only"
                  checked={notificationOptions.push}
                  onChange={() => handleCheckboxChange('push')}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#38BDF8] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Push
                </span>
              </label>

            </div>
          </div>
        </div>



        <div className="grid border-b py-6 sm:grid-cols-2">
        <div className="">
          <h2 className="text-lg font-bold leading-4 text-slate-700">
            Added To Cart
          </h2>
          <p className="font- text-slate-600">
            Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis
            neque.
          </p>
        </div>
        <div className="mt-4 flex items-center sm:justify-end">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="push"
              className="relative inline-flex cursor-pointer items-center"
            >
              <input
                type="checkbox"
                id="push"
                className="peer sr-only"
                checked={notificationOptions.push}
                onChange={() => handleCheckboxChange('push')}
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#38BDF8] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Push
              </span>
            </label>

          </div>
        </div>
      </div>




      <div className="grid border-b py-6 sm:grid-cols-2">
      <div className="">
        <h2 className="text-lg font-bold leading-4 text-slate-700">
          Reviews
        </h2>
        <p className="font- text-slate-600">
          Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis
          neque.
        </p>
      </div>
      <div className="mt-4 flex items-center sm:justify-end">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="push"
            className="relative inline-flex cursor-pointer items-center"
          >
            <input
              type="checkbox"
              id="push"
              className="peer sr-only"
              checked={notificationOptions.push}
              onChange={() => handleCheckboxChange('push')}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#38BDF8] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Push
            </span>
          </label>

        </div>
      </div>
    </div>



    <div className="grid border-b py-6 sm:grid-cols-2">
    <div className="">
      <h2 className="text-lg font-bold leading-4 text-slate-700">
        Inbox
      </h2>
      <p className="font- text-slate-600">
        Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis
        neque.
      </p>
    </div>
    <div className="mt-4 flex items-center sm:justify-end">
      <div className="flex flex-col gap-3">
        <label
          htmlFor="push"
          className="relative inline-flex cursor-pointer items-center"
        >
          <input
            type="checkbox"
            id="push"
            className="peer sr-only"
            checked={notificationOptions.push}
            onChange={() => handleCheckboxChange('push')}
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#38BDF8] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Push
          </span>
        </label>

      </div>
    </div>
  </div>

      </div>
    </div>
  </div>
);
};


export default NotificationSettings