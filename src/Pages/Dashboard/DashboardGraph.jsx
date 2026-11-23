import { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';
import "../../Styles/dashboardGraph.scss";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export default function DashboardGraph() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ datasets: [] });

 
  const labels = [
    '4/17/2026', '4/18/2026', '4/19/2026', '4/20/2026', '4/21/2026', '4/22/2026', '4/23/2026', 
    '4/24/2026', '4/25/2026', '4/26/2026', '4/27/2026', '4/28/2026', '4/29/2026', '4/30/2026', 
    '5/1/2026', '5/2/2026', '5/3/2026', '5/4/2026', '5/5/2026', '5/6/2026', '5/7/2026', 
    '5/8/2026', '5/9/2026', '5/10/2026', '5/11/2026', '5/12/2026', '5/13/2026', '5/14/2026', 
    '5/15/2026', '5/16/2026'
  ];

  
  const revenueValues = [
    350, 100, 0, 400, 900, 800, 0, 0, 700, 250, 150, 200, 1600, 500, 
    400, 350, 100, 300, 800, 400, 250, 0, 250, 0, 0, 0, 150, 0, 
    0, 0
  ];

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;


    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(103, 114, 229, 0.45)');
    gradient.addColorStop(1, 'rgba(103, 114, 229, 0.0)');

    setChartData({
      labels: labels,
      datasets: [
        {
          data: revenueValues,
          borderColor: '#5c6bc0',
          borderWidth: 2,
          backgroundColor: gradient,
          fill: true,
          tension: 0.4, 
          pointRadius: 0, 
          pointHoverRadius: 6,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          maxTicksLimit: 8, 
          color: '#8e8e93',
          font: { size: 11 },
        },
      },
      y: {
        min: 0,
        max: 1800,
        ticks: {
          stepSize: 300, 
          callback: (value) => `$${value}`,
          color: '#8e8e93',
          font: { size: 11 },
        },
        grid: {
          color: '#e5e5ea',
          borderDash: [5, 5],
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="revenue-card">
      <h2>30 Day Revenue History</h2>
      <div className="chart-wrapper">
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </div>
  );
}