import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";

const CourseDetail = () => {
  const { courseName } = useParams();

  // Dummy topics & YouTube videos
  const topics = {
    HTML: [
      { topic: "HTML Basics", video: "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
      { topic: "Forms & Inputs", video: "https://www.youtube.com/watch?v=Ukg_U3CnJWI" }
    ],
    CSS: [
      { topic: "CSS Flexbox", video: "https://www.youtube.com/watch?v=JJSoEo8JSnc" },
      { topic: "Grid Layout", video: "https://www.youtube.com/watch?v=EFafSYg-PkI" }
    ],
    JavaScript: [
      { topic: "JS Basics", video: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
      { topic: "DOM & Events", video: "https://www.youtube.com/watch?v=0ik6X4DJKCc" }
    ]
    // Add more courses as needed
  };

  const jobRoles = {
    HTML: ["Frontend Intern", "HTML Email Developer"],
    CSS: ["UI Developer", "CSS Animator"],
    JavaScript: ["Frontend Developer", "JavaScript Engineer"]
    // Add more roles
  };

  return (
    <div className="course-detail">
      <h2>📘 {courseName} Course</h2>

      <h3>📑 Topics & Videos:</h3>
      <ul>
        {(topics[courseName] || []).map((item, index) => (
          <li key={index}>
            <strong>{item.topic}:</strong> <a href={item.video} target="_blank" rel="noreferrer">Watch Video</a>
          </li>
        ))}
      </ul>

      <h3>💼 Job Opportunities:</h3>
      <ul>
        {(jobRoles[courseName] || []).map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
