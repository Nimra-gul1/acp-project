import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added for login link
import './LoginPage.css'; // Reusing same CSS for consistent styling

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('❌ Passwords do not match!');
    } else if (email && password) {
      alert('✅ Account created successfully!');
      // TODO: Add actual sign-up logic here
    } else {
      alert('❌ Please fill in all fields.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign Up</h2>
        <p>Already have an account? <Link to="/login" style={{ color: '#e11d48', fontWeight: 500, textDecoration: 'none' }}>Login</Link></p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter 6 characters or more"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button onClick={handleSignUp}>Sign Up</button>

        <div className="divider">or sign up with</div>

        <div className="social-buttons">
          <button className="google">
            <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" />
            Google
          </button>
          <button className="facebook">
            <img src="https://img.icons8.com/ios-filled/20/3b5998/facebook-new.png" alt="Facebook" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;