import React, { useCallback, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ title, valueMax, time }) {
  const [data, setData] = useState({});

  const loadData = useCallback(() => {
    let labels = []
    let values = []

    for (let index = 0; index < time * 2; index++) {
      labels = [...labels, index / 2];
    }

    for (let index = 0; index < time * 2; index++) {
      if(index === 0){
        values = [25];
      }else if(values[index - 1] >= valueMax){
        values = [...values, valueMax];
      } 
      else if(index < time){
        values = [...values, values[index - 1] + (values[index - 1] * 0.1)];
      } 
    }

    const dataResult = {
      labels: labels,
      datasets: [
        {
          label: title,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: values
        }
      ]
    };

    setData(dataResult)
  }, [time, title, valueMax]);

  useEffect(()=>{
    loadData();
  }, [])

  return (
    <div style={{marginTop: 30}}>
        <h2>{title}</h2>
        <Line data={data} />
    </div>
  );
}
export default LineChart;