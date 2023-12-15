import React from 'react'
import { Chart as ChartJS, LinearScale, CategoryScale, LineElement, PointElement, Title, Legend, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    LinearScale,
    CategoryScale,
    LineElement,
    PointElement,
    Tooltip,
    Title,
    Legend
)

const OPTIONS = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            ticks: {
                color: "rgb(255,255,255)",
                font: {
                    size: 14,
                },
            },
            grid: {
                display: false,
            },
        },
        x: {
            ticks: {
                color: "rgb(255,255,255)",
                font: {
                    size: 14,
                },
            },
            grid: {
                display: false,
            },
        },
    },
};





const LineChart = ({ data, labels, selectedCurrency }) => {

    if(!selectedCurrency) return null

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: selectedCurrency.name,
                data: data,
                borderColor: 'rgb(161,63,128)'
            }
        ]
    }
    return (
        <div className='lineChart'>
            <div className="title">
                <h3>{selectedCurrency.name}</h3>
                <h3>$ {Math.round(selectedCurrency.priceUsd * 100) / 100}</h3>
            </div>
            <Line options={OPTIONS} data={chartData} />
        </div>
    )
}

export default LineChart