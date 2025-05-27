import Guardian from "../assets/guardian.png";
import Person from "../assets/person.jpg";
import { FaUserShield, FaBell, FaChalkboardTeacher } from "react-icons/fa";

function Card({ children, background }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-xl p-6"
      style={{ background: background || "#ffffff" }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function CardContent({ children }) {
  return <div className="space-y-4 text-gray-800 font-medium">{children}</div>;
}

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-100 p-10 min-h-screen  rounded-2xl   font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 flex items-center gap-6 mb-10">
        <img
          src={Person}
          alt="Student"
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-300"
        />
        <div className="flex flex-col space-y-2">
          <h3 className="text-2xl font-bold text-indigo-900">
            Aniruddh Shrivastava
          </h3>
          <div className="flex flex-row gap-7">
            <p className="text-md text-gray-600">
              <strong>ID:</strong> 2020-2024
            </p>
            <p className="text-md text-gray-600">
              <strong>Number:</strong> +91-8349329424
            </p>
            <p className="text-md text-gray-600">
              <strong>Email:</strong> ux.aniruddh@gmail.com
            </p>
            <p className="text-md text-gray-600">
              <strong>Address:</strong> Bangalore
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <Card background="linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)">
          <CardContent>
            <h3 className="text-xl font-semibold text-indigo-800 flex items-center gap-2">
              <FaUserShield className="text-indigo-600" /> Guardian Data
            </h3>
            <p>Email: aniruddh@gmail.com</p>
            <p>Phone: 9876543210</p>
            <p>Alt Email: anirudddh@gmail.com</p>
            <p>Address: Bangalore</p>
          </CardContent>
          <img
            src={Guardian}
            alt="Guardian"
            className="absolute right-4 bottom-4 w-28 h-28 opacity-10 object-contain pointer-events-none"
          />
        </Card>
        <Card background="linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)">
          <CardContent>
            <h3 className="text-xl font-semibold text-indigo-800 flex items-center gap-2">
              <FaBell className="text-white" /> Admin Notifications
            </h3>
            <p className="text-white font-semibold">
              Fees Payment Due: 30 June 2025
            </p>
            <p className="text-white font-semibold">Upload Aadhar: Pending</p>
          </CardContent>
        </Card>
        <Card background="linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)">
          <CardContent>
            <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
              <FaChalkboardTeacher className="text-blue-800" /> Teacher's Data
            </h3>
            <p>Data will be displayed here...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
