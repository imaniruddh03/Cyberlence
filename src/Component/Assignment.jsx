import React, { useState } from 'react';
import { BadgeCheck, Clock } from 'lucide-react';

const initialAssignments = [
  { id: 'A101', courseId: 'CS101', title: 'Assignment 1', status: 'Ongoing' },
  { id: 'A102', courseId: 'CS102', title: 'Assignment 2', status: 'Completed' },
  { id: 'A103', courseId: 'CS101', title: 'Assignment 3', status: 'Completed' },
];

export default function Assignments() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [filterCourseId, setFilterCourseId] = useState('');
  const [filterAssignmentId, setFilterAssignmentId] = useState('');

  const filteredAssignments = assignments.filter((a) => {
    return (
      a.courseId.toLowerCase().includes(filterCourseId.toLowerCase()) &&
      a.id.toLowerCase().includes(filterAssignmentId.toLowerCase())
    );
  });

  const grouped = filteredAssignments.reduce(
    (acc, curr) => {
      acc[curr.status] = [...(acc[curr.status] || []), curr];
      return acc;
    },
    { Completed: [], Ongoing: [] }
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 p-8 rounded-2xl font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-8 text-center">📚 Assignment Tracker</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <input
            type="text"
            placeholder="Filter by Course ID"
            value={filterCourseId}
            onChange={(e) => setFilterCourseId(e.target.value)}
            className="px-4 py-2 rounded-full shadow focus:outline-none bg-white border border-gray-300 text-sm w-full md:w-1/3"
          />
          <input
            type="text"
            placeholder="Filter by Assignment ID"
            value={filterAssignmentId}
            onChange={(e) => setFilterAssignmentId(e.target.value)}
            className="px-4 py-2 rounded-full shadow focus:outline-none bg-white border border-gray-300 text-sm w-full md:w-1/3"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {['Ongoing', 'Completed'].map((status) => (
            <div key={status} className="backdrop-blur-sm bg-white/70 border border-indigo-100 p-6 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
                {status === 'Completed' ? <BadgeCheck className="text-green-600" /> : <Clock className="text-yellow-500" />}
                {status} Assignments
              </h3>
              {grouped[status].length === 0 ? (
                <p className="text-sm text-gray-500">No {status.toLowerCase()} assignments found.</p>
              ) : (
                <ul className="space-y-4">
                  {grouped[status].map((a) => (
                    <li
                      key={a.id}
                      className="bg-white rounded-xl border border-indigo-100 p-4 shadow-sm hover:shadow-md transition duration-300"
                    >
                      <div className="flex flex-col">
                        <span className="text-lg font-semibold text-indigo-800">{a.title}</span>
                        <span className="text-sm text-gray-600 mt-1">{a.courseId} • {a.id}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}