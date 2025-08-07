import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate credential check
    const defaultUser = 'citizen@gramalink.com';
    const defaultPass = 'civic123';

    if (identifier === defaultUser && password === defaultPass) {
      navigate('/dashboard'); // ✅ redirect
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <nav>
        <div className="nav-left">
          <h1>GramaLink <span className="gov-tag">| Govt Portal</span></h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>

      <div className="container">
        <h2>GramaLink Government Portal</h2>
        <p className="subtext">Secure Sign-In for Citizens and Officials</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="identifier">Email or Phone Number</label>
          <input
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Enter email or phone"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

          <button type="submit">Sign In</button>
        </form>
      </div>

      <footer className="footer-bar">
        <div className="footer-content">
          <div className="contact-info">
            <p><strong>Contact:</strong> 1800-123-456 &nbsp; | &nbsp; support@GramaLink.gov.in</p>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LoginPage;
