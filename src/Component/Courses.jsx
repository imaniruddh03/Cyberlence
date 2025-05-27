import { CircleCheck, School } from 'lucide-react';

const courseData = [
  { id: 'CS101', name: 'Intro to Programming', credits: 3, grade: 'A', gradePoint: 10 },
  { id: 'CS102', name: 'Data Structures', credits: 4, grade: 'B', gradePoint: 8 },
  { id: 'MA101', name: 'Calculus', credits: 3, grade: 'A', gradePoint: 10 },
];

function CustomProgressBar({ value }) {
  return (
    <div className="w-full h-3 bg-indigo-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-in-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default function Courses() {
  return (
    <div className="p-8 bg-gradient-to-r from-indigo-50 to-purple-100 min-h-screen font-sans">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
        <School className="text-indigo-600" /> My Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-indigo-800">{course.name}</h3>
              <CircleCheck className="text-green-500" />
            </div>
            <p className="text-sm text-gray-500">
              Course ID: <span className="font-medium text-gray-700">{course.id}</span>
            </p>
            <div className="flex gap-6 text-sm text-gray-700">
              <span><strong>Credits:</strong> {course.credits}</span>
              <span><strong>Grade:</strong> {course.grade}</span>
              <span><strong>Grade Point:</strong> {course.gradePoint}/10</span>
            </div>
            <div className="pt-2">
              <CustomProgressBar value={(course.gradePoint / 10) * 100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
