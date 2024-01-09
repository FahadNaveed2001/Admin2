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
    <div className="flex flex-col w-[1500px]">
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


    </div>
  );
};

export default Schedule;
