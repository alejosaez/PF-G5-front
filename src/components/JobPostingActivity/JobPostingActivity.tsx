import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const JobPostingActivity = () => {
  const [timeFrame, setTimeFrame] = useState('monthly'); // 'daily', 'weekly', 'monthly'

  // Datos que vendrían del back
  const dailyPostings = [
    { date: '2023-06-01', newPostings: 5 },
    { date: '2023-06-02', newPostings: 7 },
    { date: '2023-06-03', newPostings: 3 },
    { date: '2023-06-04', newPostings: 8 },
    { date: '2023-06-05', newPostings: 12 },
    { date: '2023-06-06', newPostings: 10 },
    { date: '2023-06-07', newPostings: 6 },
  ];

  const weeklyPostings = [
    { week: 'Week 1', newPostings: 35 },
    { week: 'Week 2', newPostings: 42 },
    { week: 'Week 3', newPostings: 28 },
    { week: 'Week 4', newPostings: 50 },
  ];

  const monthlyPostings = [
    { month: 'Jan', newPostings: 120 },
    { month: 'Feb', newPostings: 150 },
    { month: 'Mar', newPostings: 200 },
    { month: 'Apr', newPostings: 180 },
    { month: 'May', newPostings: 210 },
    { month: 'Jun', newPostings: 250 },
  ];

  const getPostingsData = () => {
    switch(timeFrame) {
      case 'daily':
        return dailyPostings;
      case 'weekly':
        return weeklyPostings;
      case 'monthly':
      default:
        return monthlyPostings;
    }
  };

  const getXAxisKey = () => {
    switch(timeFrame) {
      case 'daily':
        return 'date';
      case 'weekly':
        return 'week';
      case 'monthly':
      default:
        return 'month';
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">Job Posting Activity</h3>

      {/* Nuevas ofertas de empleo */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-md font-semibold">New Job Postings</h4>
          <div>
            <select 
              value={timeFrame} 
              onChange={(e) => setTimeFrame(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={getPostingsData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={getXAxisKey()} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="newPostings" fill="#8884d8" name="New Postings" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Estadísticas rápidas de nuevos empleos */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-sm text-gray-600">Total New Postings (Last 30 days)</p>
          <p className="text-2xl font-bold">
            {dailyPostings.reduce((sum, day) => sum + day.newPostings, 0)}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-sm text-gray-600">Average Postings per Day (Last 30 days)</p>
          <p className="text-2xl font-bold">
            {(dailyPostings.reduce((sum, day) => sum + day.newPostings, 0) / dailyPostings.length).toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobPostingActivity;