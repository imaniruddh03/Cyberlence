import { School, Search } from 'lucide-react';
import { useState } from 'react';

const courseData = [
  { id: 'CS101', name: 'Intro to Programming', credits: 3, grade: 'A', gradePoint: 10, semester: 'Semester 1' },
  { id: 'CS102', name: 'Data Structures', credits: 4, grade: 'B', gradePoint: 8, semester: 'Semester 2' },
  { id: 'MA101', name: 'Calculus', credits: 3, grade: 'A', gradePoint: 10, semester: 'Semester 1' },
  { id: 'CS201', name: 'Algorithms', credits: 4, grade: 'A', gradePoint: 10, semester: 'Semester 3' },
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('All');

  const semesters = ['All', ...new Set(courseData.map(course => course.semester))];

  const filteredCourses = courseData.filter(course =>
    (course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedSemester === 'All' || course.semester === selectedSemester)
  );

  return (
    <div className="p-8 bg-gradient-to-r from-indigo-50 to-purple-100 min-h-screen font-sans">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
        <School className="text-indigo-600" /> My Courses
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="w-full md:w-1/4">
          <select
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-indigo-100 text-indigo-800 text-left">
            <tr>
              <th className="px-6 py-4">Course Name</th>
              <th className="px-6 py-4">Course ID</th>
              <th className="px-6 py-4">Credit Units</th>
              <th className="px-6 py-4">Grade</th>
              <th className="px-6 py-4">Grade Points</th>
              <th className="px-6 py-4">Semester</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <tr key={course.id} className="border-t hover:bg-indigo-50">
                  <td className="px-6 py-3">{course.name}</td>
                  <td className="px-6 py-3">{course.id}</td>
                  <td className="px-6 py-3">{course.credits}</td>
                  <td className="px-6 py-3">{course.grade}</td>
                  <td className="px-6 py-3">{course.gradePoint}/10</td>
                  <td className="px-6 py-3">{course.semester}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 text-center text-gray-400" colSpan="6">
                  No matching courses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
