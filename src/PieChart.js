import React from "react";
import { Pie } from "react-chartjs-2";


const labels = ["Font GiB", "Image GiB", "Video GiB", "Free GiB"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Font GiB",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0],
    },
    {
        label: "Image GiB",
        backgroundColor: "green",
        borderColor: "green",
        data: [0.11],
      },
      {
        label: "Video GiB",
        backgroundColor: "yellow",
        borderColor: "yellow",
        data: [0.02],
      },
      {
        label: "Free GiB",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0.86],
      },
  ],
};


const options = {
    maintainAspectRatio: false, 
    responsive: true, 
    width: 900, 
    height: 900, 
  };


const PieChart = () => {
  return (
    <div>
      <Pie data={data}  options={options}/>
    </div>
  );
};
export default PieChart;