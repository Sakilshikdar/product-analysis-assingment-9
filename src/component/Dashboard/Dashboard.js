import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='chart-parent'>
            <div>
                <h2>MONTH WISH SELL</h2>
                <div className='chart'>
                    <LineChart width={400} height={200} data={data}>
                        <Line dataKey={'sell'}></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip />
                    </LineChart>
                </div>
                <small className='sell'>sell</small>
            </div>
            <div>
                <h2>Investment VS Revenue</h2>
                <div>
                    <AreaChart width={500} height={300} data={data} margin={{

                        top: 10, right: 30, left: 0, bottom: 0
                    }}>
                        <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
                        <XAxis dataKey={'name'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="investment"
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;