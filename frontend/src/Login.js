import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:5000/login', form)
      .then(res => {
        alert(res.data.message);
        navigate("/courses");
      })
      .catch(err => {
        alert(err.response?.data?.message || 'Login failed');
      });
  };

  return (
    <div className="auth-container bg-animated">
      <h2>Login to Praveen's Platform</h2>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}
