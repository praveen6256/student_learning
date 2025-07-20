import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

export default function Signup() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = () => {
    axios.post('http://localhost:5000/signup', form)
      .then(res => {
        alert(res.data.message);
        navigate("/");
      })
      .catch(err => {
        alert(err.response?.data?.message || 'Signup failed');
      });
  };

  return (
    <div className="auth-container bg-animated">
      <h2>Join Praveen's Platform 🎓</h2>
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p className="quote">"Code is like humor. When you have to explain it, it’s bad." – Cory House</p>
      <p className="footer">
        Already have an account? <Link to="/" style={{ color: "#fff", textDecoration: "underline" }}>Login</Link>
      </p>
    </div>
  );
}
