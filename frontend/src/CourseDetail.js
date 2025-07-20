import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${id}`)
      .then(res => setCourse(res.data))
      .catch(err => console.log("Error loading course:", err));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <h3>📌 Topics</h3>
      <ul className="topic-list">
        {course.topics?.map((topic, index) => (
          <li key={index}>
            <strong>{topic.title}</strong>
            <p>{topic.description}</p>
            {course.youtubeLinks?.[index] && (
              <iframe
                width="400"
                height="215"
                src={course.youtubeLinks[index]}
                title={topic.title}
                allowFullScreen
              ></iframe>
            )}
          </li>
        ))}
      </ul>

      <h3>💼 Jobs</h3>
      <ul>
        {course.jobs?.map((job, i) => (
          <li key={i}>{job}</li>
        ))}
      </ul>
    </div>
  );
}
