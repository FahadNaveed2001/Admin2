import React from "react";
import {
  Card,
  CardBody,
  CardHeader,

} from "@material-tailwind/react";
import Chart from "react-apexcharts";


const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
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
    colors: ["#38BDF8"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#38BDF8",
          fontSize: "15px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#38BDF8",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const Example = () => {
  return (
    <Card className="w-[390px] bg-[#38bff828] items-center h-[320px] lg:w-[510px] xl:w-[1000px]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >

        <div>
         <h1 className=" text-[20px] font-bold dark:text-white">Sales Management</h1>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0 w-full ">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export default Example;
