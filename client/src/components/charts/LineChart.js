import React, { useState, useEffect, useRef } from "react";
import { Chart } from "primereact/chart";
import ContentService from "../../ContentService";

const LineChart = () => {
  const chartRef = useRef();
  const [date, setDate] = useState(null);
  const [casesNew, setCasesNew] = useState(null);
  const [casesRecovered, setCasesRecovered] = useState(null)

  const [lineChartData, setLineChartData] = useState(null);
  const contentService = new ContentService();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      contentService.getAllData().then((res) => {
        setLineChartData({
          labels: res.dateArray,
          datasets: [
            {
              label: "New Cases",
              data: res.casesNewArray,
              fill: true,
              borderColor: getComputedStyle(document.body).getPropertyValue(
                "--primary-color"
              ),
              tension: 0.4,
            },
            {
              label: "Recovered Cases",
              data: res.casesRecoveredArray,
              fill: true,
              borderColor: '#44ab03',
              tension: 0.4,
            },
          ],
        });
        chartRef.current.update();
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const getLightTheme = () => {
    let basicOptions = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: "#495057",
          },
          grid: {
            drawOnChartArea: false,
            color: "#ebedef",
          },
        },
      },
    };

    return { basicOptions };
  };

  const { basicOptions } = getLightTheme();

  return (
    <div>
      <div className="card pt-6">
        <Chart
          type="line"
          data={lineChartData}
          ref={chartRef}
          options={basicOptions}
        />
      </div>
    </div>
  );
};

export default LineChart;
