import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'Day 1', performance: 4000 },
  { name: 'Day 2', performance: 3000 },
  { name: 'Day 3', performance: 5000 },
  { name: 'Day 4', performance: 2780 },
  { name: 'Day 5', performance: 1890 },
  { name: 'Day 6', performance: 2390 },
  { name: 'Day 7', performance: 3490 },
];

const PerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={performanceData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#888" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip 
          contentStyle={{ backgroundColor: '#333', border: 'none' }}
          itemStyle={{ color: '#fff' }}
        />
        <Line type="monotone" dataKey="performance" stroke="#8884d8" strokeWidth={2} dot={{ fill: '#8884d8', strokeWidth: 2 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;