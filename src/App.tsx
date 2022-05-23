import './App.css';
import { DateRangePicker } from 'react-date-range';
import React, { useEffect, useState } from 'react';
import { addDays } from 'date-fns';
import Chart from './Chart';
import {options, data} from './constants'

interface Datepicker {
  startDate: Date,
  endDate: Date,
  key: string,
}

const App: React.FC<unknown> = () => {
  const [showDatePicker,setShowDatePicker] = useState(false);
  const [datepicker, setDatepicker] = useState<Array<Datepicker>>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const [chartData,setChartData] = useState<any>(data);

  useEffect(() => {

    const generateData = (datepicker: Array<Datepicker>) => {
      const { startDate, endDate } = datepicker[0];
      let arr: Array<any> = [];
      let dt:Date;
      for (arr = [], dt = new Date(startDate); dt <= new Date(endDate); dt.setDate(dt.getDate() + 1)) {
        arr.push({ x: getFormattedDate(dt), y: generateRndNum(10, 40) });
      }
      return arr;
    }


    const data: Array<Datepicker> = generateData(datepicker);
    if (data.length > 1) {//update only when there are multiple dates selected
      let chartData: any = {
        datasets: [
          {
            label: 'Temprature',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ]
      }
      chartData.datasets[0].data = data;
      setChartData({ ...chartData });
    }

  }, [datepicker]);
  

  const generateRndNum = (min:number,max:number) => {//generate random number
    return Math.floor(Math.random() * max) + min
  }

  const getFormattedDate = (date:Date) => {//convert date object to formatted string YYYY-MM-DD
    let d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
  }

  return (
    <div className="App">
      <>
        <h3>Average Day Temprature</h3>
        <div style={{ width: 500, height: 200 }} className="chart-container">
          <Chart options={options} data={chartData}></Chart>
        </div>
        <div className="controls-container">
          <button className="button" style={{marginBottom:10}} onClick={() => { setShowDatePicker(!showDatePicker) }}>{showDatePicker ? "Hide" : "Change"} Date Range</button>
          {
            showDatePicker && (<div>
              <DateRangePicker
                onChange={(item: any) => setDatepicker([item.selection])}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={datepicker}
                direction="horizontal"
              />
            </div>)
          }
        </div>
      </>
    </div>
  );
}

export default App;
