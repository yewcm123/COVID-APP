
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import DbService from '../../dbService';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {

    const { date, casesNew }=useStateContext();

    const [ lineChartData, setLineChartData]=useState({
        labels: [],
        datasets: [
            {
                label: 'New Cases',
                data: [],
                fill: true,
                borderColor: '#42A5F5',
                tension: .4
            },
           
        ]
    })

    DbService();

    useEffect (() => {
        setLineChartData({
            labels: date,
        datasets: [
            {
                label: 'New Cases',
                data: casesNew,
                fill: true,
                borderColor: '#42A5F5',
                tension: .4
            },    
        ]
        
        })
    },[date,casesNew])

    // const [LineChartData] = useState({
    //     labels: date,
    //     datasets: [
    //         {
    //             label: 'New Cases',
    //             data: casesNew,
    //             fill: true,
    //             borderColor: '#42A5F5',
    //             tension: .4
    //         },
           
    //     ]
    // });

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
                <Chart type="line" data={lineChartData} options={basicOptions}  />
            </div>
        </div>
    )
}

export default LineChart;