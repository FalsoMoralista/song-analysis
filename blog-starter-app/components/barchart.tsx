import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from "react-chartjs-2";

import { SongStats } from "../interfaces/song";

interface BarChartProps {    
    dataProp: number[];
    labelsProp: string[];
    selectedMeasure: number;
};

const BarChart: React.FC<BarChartProps> = ({dataProp, labelsProp, selectedMeasure}) => {
    // Used to register plugins, axis types or chart types globally to all your charts.
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    let text:string = "";
    let label: string = "";
    let backgroundColor:string = ""; 

    
    if (selectedMeasure === 0){ //TODO: FIX
      text = "Lexical Richness"; 
      label = "Average Lexical Richness by time period";
      backgroundColor = "rgba(142,124,195, 0.7)";
    }  
    else{
      text = "Entropy";
      label = "Average Entropy by time period";
      backgroundColor = "rgba(22, 83, 126, 0.7)";
    }      
    

    let options = {
        elements:{
            bar: {
                borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: text, // get via props
          },
        },
      };
      
    let data = {
        labels: labelsProp,
        datasets: [{
            label:label, // get via props
            data: dataProp,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: backgroundColor // set differently for each measure
        }]
      }
      return <Bar options={options} data={data} />;
}

export default BarChart;