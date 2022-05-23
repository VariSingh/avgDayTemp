import './App.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


type ChartProps = {
  data: any,
  options: any
};
const Chart: React.FC<ChartProps> = ({
  data,
  options
}) => {
  return (
      <>
       <Line options={options} data={data}/>
      </>
  );
}

export default Chart;
