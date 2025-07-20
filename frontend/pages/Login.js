import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "../src/firebase";
import "../styles.css";


const Login = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome ${result.user.displayName}`);
      // TODO: redirect to courses
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className={`login-page ${dark ? "dark" : ""}`}>
      <div className="login-card">
        <h1>🔥 Engineering Courses</h1>
        <p>Login to explore awesome content</p>

        <button className="google-btn" onClick={loginWithGoogle}>
          🚀 Continue with Google
        </button>

        <div className="theme-toggle">
          <label>☀️ / 🌙</label>
          <input type="checkbox" onChange={toggleTheme} />
        </div>

        <p className="footer">Made with ❤️ by Praveen</p>
      </div>
    </div>
  );
};

export default Login;
