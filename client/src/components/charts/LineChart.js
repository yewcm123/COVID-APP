
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import DbService from '../../dbService';
import { useStateContext } from '../../contexts/ContextProvider';


const LineChart = () => {
    const { data, setData }=useStateContext();

    setData( DbService())

    const [LineChartData] = useState({
        labels: ['24', '25', '26', '27', '28', '29', '30'],
        datasets: [
            {
                label: 'First Dataset',
                data: [4, 0, 0, 0, 3, 1, 0],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            },
           
        ]
    });
    
    const [basicData] = useState({
        labels: ['24', '25', '26', '27', '28', '29', '30'],
        datasets: [
            {
                label: 'First Dataset',
                data: [4, 0, 0, 0, 3, 1, 0],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            },
           
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        return {basicOptions}
    }

    const { basicOptions } = getLightTheme();

    return (
        <div>
            <div className="card pt-6">
                <h5>Basic</h5>
                <Chart type="line" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}

export default LineChart;