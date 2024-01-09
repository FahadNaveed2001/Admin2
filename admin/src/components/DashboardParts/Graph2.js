import React from "react";
import {
  Card,
  CardBody,
  CardHeader,

} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "line",
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
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
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
          fontWeight: 800,
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
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#38BDF8",
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
    <Card className="w-full sm:w-[90%] mx-4 bg-[#38bff828]">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="flex flex-col gap-2 md:flex-row md:items-center"
    >
      <div>
        <h1 className="text-[20px] font-bold">Products</h1>
      </div>
    </CardHeader>
    <CardBody className="px-2 pb-0">
      <Chart {...chartConfig} />
    </CardBody>
  </Card>
);
};

export default Example;
