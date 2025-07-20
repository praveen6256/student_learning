import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.log('Error:', err));
  }, []);

  return (
    <div className="course-list">
      <h2>🎓 Explore Courses</h2>
      <div className="courses-grid">
        {courses.map(course => (
          <Link to={`/courses/${course._id}`} key={course._id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
