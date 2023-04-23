import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
  } from 'chart.js';
  import { Line , Doughnut } from 'react-chartjs-2';
//   import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
  );
  
export function LineChart() {
    const labels = getLastYearMonths();
    const options = {
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
    //   let d = ;
      const data = {
        labels,
        datasets:[ {
            label:"views",
            data: [1,2,3,4,5,6,7,8,9,10,11,12],
            borderColor: "rgba(107,70,193,0.5)",
            backgroundColor: "#6b46"
        }]
      }

  return (
    <Line data={data}  options={options}/>);
}

function getLastYearMonths(){
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let label = [];


  const currentMonTH = new Date().getMonth();
  console.log(label);
  const remain = 11-currentMonTH;
  
  for (let i = currentMonTH+1; i < 12; i++) {
    const element = months[i];
    label.push(element);
  }
  console.log(label);
  
  for (let i = 0; i <= currentMonTH; i++) {
    const element = months[i];
    label.push(element);
  }
  console.log(label);


return label;
}



export const DoughnutChart = ()=>{
        const labels = ["Subscribed","Not Subscribed"]

        //   let d = ;
          const data = {
            labels,
            datasets:[ {
                label:"views",
                data: [3,20],
                borderColor:  ['rgba(62,13,171)',"rgba(214,43,129)" ],
                backgroundColor: ['rgba(62,13,171,0.3)',"rgba(214,43,129,0.3)" ]
            }]
          }
    
      return (<Doughnut data={data}/>);
    }
