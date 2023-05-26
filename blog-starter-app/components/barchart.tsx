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
};

const BarChart: React.FC<BarChartProps> = ({dataProp, labelsProp}) => {
    // Used to register plugins, axis types or chart types globally to all your charts.
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
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
            text: 'Lexical Richness', // get via props
          },
        },
      };
      
    const data = {
        labels: labelsProp,
        datasets: [{
            label:'Average Lexical Richness', // get via props
            data: dataProp,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgba(142,124,195, 0.7)' // set differently for each measure
        }]
      }
      return <Bar options={options} data={data} />;
}

export default BarChart;