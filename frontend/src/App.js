import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Router>
        <nav className="navbar">
          <h2>🔥 Praveen Learning</h2>
          <button onClick={toggleDark} className="mode-btn">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
