import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';


const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let newChart; 

    if (data && data.length > 0) {
      const ctx = chartRef.current.getContext('2d');

      if (newChart) {
        newChart.destroy();
      }

      newChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.map(item => item.label),
          datasets: [
            {
              data: data.map(item => item.value),
              backgroundColor: [
                '#82CD47',
                '#ffa116',
                '#C70039',
              ],
            },
          ],
        },
      });
    }

    return () => {
      // Cleanup: destroy the chart when the component unmounts
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
