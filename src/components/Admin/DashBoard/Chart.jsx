import React from 'react'
// import { Line } from 'react-chartjs-2'
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
    const labels = ['abc', 'abc2' ,'abc3' , 'abc4'];
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
            data: [1,2,3,4,5],
            borderColor: "rgba(107,70,193,0.5)",
            backgroundColor: "#6b46"
        }]
      }

  return (
    <Line data={data}  options={options}/>);
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
    
      return (

        <Doughnut data={data}/>);
    }
