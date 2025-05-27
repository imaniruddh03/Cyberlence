import { useState } from 'react'
import './App.css'
import Sidebar from './Component/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Courses from './Component/Courses';
import CGPA from './Component/CGPA';
import Assignments from './Component/Assignment';
import { UserCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const renderContent = () => {
    switch (selectedPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Courses':
        return <Courses />;
      case 'CGPA':
        return <CGPA />;
      case 'Assignments':
        return <Assignments />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar onNavigate={setSelectedPage} selectedPage={selectedPage} />


        <main className="flex-1 bg-gray-50">
          <div className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
            <div className="text-lg text-gray-600">
              {selectedPage === 'Dashboard' ? 'Home' : `Home / ${selectedPage}`}
            </div>
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 text-indigo-800 hover:text-indigo-900"
              >
                <UserCircle className="w-6 h-6" />
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50"
                  >
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Edit Profile</button>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Change Password</button>
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <motion.div
            key={selectedPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </Router>
  )
}

export default App
