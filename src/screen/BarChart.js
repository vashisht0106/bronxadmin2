import React from 'react';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";




const labels = [ "February", "March", "April", "May", "June", "July", "August", "September ", "October", "November", "December", "January"];

const data = {
  labels: labels,
  datasets: [
    {
      label: " Bandwidth Usage (MiB)",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [229,175,245,218,183,136,240,265,285,231,21,4.99],
    },
  ],
};

const BarChart = () => {

    
    

    

        return(
           
                
            <div>
            <Bar data={data} width={'50%'} height={'20%'}/>
          </div>
        


    )
    };

    export default BarChart;
