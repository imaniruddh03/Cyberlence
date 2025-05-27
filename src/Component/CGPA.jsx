import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Sky from '../assets/sky.jpg';

const previousCGPARecords = [
  { semester: '1st Semester', cgpa: 8.2 },
  { semester: '2nd Semester', cgpa: 8.2 },
  { semester: '3rd Semester', cgpa: 7.0 },
  { semester: '4th Semester', cgpa: 8.4 },
  { semester: '5th Semester', cgpa: 8.8 },
];

const completedCourses = [
  { credits: 3, gradePoint: 10 },
  { credits: 4, gradePoint: 8 },
  { credits: 3, gradePoint: 10 },
];

export default function CGPA() {
  const totalCredits = completedCourses.reduce((sum, c) => sum + c.credits, 0);
  const weightedPoints = completedCourses.reduce((sum, c) => sum + c.credits * c.gradePoint, 0);
  const cgpa = (weightedPoints / totalCredits).toFixed(2);

  const chartData = {
    labels: previousCGPARecords.map(r => r.semester),
    datasets: [
      {
        label: 'CGPA History',
        data: previousCGPARecords.map(r => r.cgpa),
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderColor: '#6366F1',
        tension: 0.4,
        pointBackgroundColor: '#6366F1',
        pointRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0.0,
        max: 10.0,
        ticks: {
          stepSize: 0.1,
          color: '#6B7280',
        },
      },
      x: {
        ticks: {
          color: '#6B7280',
        },
      },
    },
  };

  return (
    <div
      className="p-8 min-h-screen font-sans bg-cover bg-no-repeat bg-center"
    >
      <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
        <TrendingUp className="text-indigo-700" /> CGPA Report
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div
          className="rounded-2xl text-white p-6 bg-cover bg-center"
          style={{ backgroundImage: `url(${Sky})` }}
        >
          <div className="backdrop-blur-lg bg-white/20 font-bold rounded-xl p-4">
            <p className="text-2xl uppercase tracking-wide">Grade Point Average</p>
            <h1 className="text-5xl font-bold mt-2">{cgpa}</h1>
            <p className="text-sm mt-2">Top 10 students in campus</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Previous CGPA Records</h3>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}