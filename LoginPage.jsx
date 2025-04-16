import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password123') {
      alert('✅ Login successful!');
    } else {
      alert('❌ Invalid email or password!');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>

        <p>
  Don't have an account? <Link to="/signup" style={{ color: '#e11d48', fontWeight: 500, textDecoration: 'none' }}>Sign Up</Link>
</p>


        <label>Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>
          Password <a href="#">Forgot Password?</a>
        </label>
        <input
          type="password"
          placeholder="Enter 6 characters or more"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="remember">
          <input type="checkbox" /> Remember me
        </div>

        <button onClick={handleLogin}>Login</button>

        <div className="divider">or login with</div>

        <div className="social-buttons">
          <button className="google">
            <img
              src="https://img.icons8.com/color/20/000000/google-logo.png"
              alt="Google"
            />
            Google
          </button>
          <button className="facebook">
            <img
              src="https://img.icons8.com/ios-filled/20/3b5998/facebook-new.png"
              alt="Facebook"
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
