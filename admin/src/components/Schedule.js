import React from "react";
import Calendar1 from "./schedule/Calendar1";
import Calendar2 from "./schedule/Calendar2";
import Calendar3 from "./schedule/Calendar3";
import Calendar4 from "./schedule/Calender4";
import Calendar5 from "./schedule/Calender5";
import Calendar6 from "./schedule/Calender6";

const Schedule = () => {
  return (

    <div className="flex flex-row">
 
    <div className="flex flex-col w-[100%]">
    <div className="mx-5 text-[#000000] text-[50px] font-bold"><h1>This Week Schedule</h1></div>
      <div className="flex flex-row">
        <Calendar1 />
        <Calendar2 />
        <Calendar3 />
      </div>
      <div className="flex flex-row">
        <Calendar4 />
        <Calendar5 />
        <Calendar6 />
     </div>

    </div>
    <div className="mx-[80px] flex flex-col w-[30%] border-opacity-50 h-[800px] mt-[110px]">
    <div className="grid h-[300px] w-[400px] card bg-[#38bff828] rounded-box place-items-center px-5">In many industries, such as engineering and construction, the development and maintenance of the project schedule is the responsibility of a full-time scheduler or team of schedulers, depending on the size and the scope of the project. The techniques of scheduling are well developed but inconsistently applied throughout industry</div>
    <div className="divider text-[black]">OR</div>
    <div className="grid h-[300px] card bg-[#38bff828] rounded-box place-items-center px-5">The project schedule is a calendar that links the tasks to be done with the resources that will do them. It is the core of the project plan used to show the organization how the work will be done, commit people to the project, determine resource needs, and used as a kind of checklist to make sure that every task necessary is performed</div>
  </div>

    </div>
  );
};

export default Schedule;
