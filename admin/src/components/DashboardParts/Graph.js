import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";


const chartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
    legend: {
      show: false,
    },
  },
};

const Graph = () => {
  return (
    <Card className="items-center w-[390px] bg-[#38bff828] mx-5 lg:w-[270px] xl:w-[420px] "> 
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >

        <div>
         <h1 className=" text-[20px] lg:text-[15px] font-bold dark:text-white">Your Daily Statistical Reports</h1>
        </div>
      </CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export default Graph;
