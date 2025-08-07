import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirm: '',
    terms: false,
  });
  const [step, setStep] = useState('signup');
  const [verifyCode, setVerifyCode] = useState('');

  const toggleVisibility = (field) => {
    if (field === 'password') setShowPassword(!showPassword);
    if (field === 'confirm') setShowConfirm(!showConfirm);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password, confirm, terms } = formData;

    if (!fullname || !email || !password || !confirm || !terms) {
      alert("⚠️ Please complete all fields and accept the terms.");
      return;
    }
    if (password !== confirm) {
      alert("❌ Passwords do not match.");
      return;
    }

    alert(`✅ Verification code sent to: ${email}`);
    setStep('verify');
  };

  const handleVerify = () => {
    if (verifyCode === '123456') {
      alert('✅ Email verified successfully! Redirecting to login...');
      setTimeout(() => {
        window.location.href = '/'; // update as needed
      }, 1500);
    } else {
      alert('❌ Invalid verification code.');
    }
  };

  return (
    <div>
      <style>{`
        :root {
          --primary: #1e3a8a;
          --accent: #2563eb;
          --white: #ffffff;
          --light: #f8fafc;
          --text: #1f2937;
          --shadow: rgba(0, 0, 0, 0.1);
        }
        body, html {
          margin: 0; padding: 0;
          height: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .page-bg {
          background: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80') no-repeat center center fixed;
          background-size: cover;
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: -2;
        }
        .page-bg::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 50, 0.5);
          z-index: -1;
        }
        nav {
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.85);
          padding: 12px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        nav h1 {
          font-size: 20px;
          color: var(--primary);
        }
        .gov-tag {
          font-size: 13px;
          color: #555;
        }
        .form-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 140px);
          padding: 20px;
        }
        .container {
          max-width: 420px;
          background: var(--white);
          padding: 36px 32px;
          border-radius: 16px;
          box-shadow: 0 10px 30px var(--shadow);
          animation: slideUp 0.7s ease;
          width: 100%;
        }
        .container h2 {
          color: var(--primary);
          text-align: center;
          margin-bottom: 16px;
        }
        .container p.subtext {
          text-align: center;
          font-size: 14px;
          color: gray;
          margin-bottom: 25px;
        }
        label {
          font-weight: 600;
          display: block;
          margin-bottom: 6px;
          color: var(--text);
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 12px 44px 12px 14px;
          margin-bottom: 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 15px;
        }
        input:focus {
          border-color: var(--accent);
          outline: none;
        }
        .input-group {
          position: relative;
        }
        .password-toggle {
          position: absolute;
          right: 14px;
          top: 40%;
          transform: translateY(-50%);
          font-size: 16px;
          cursor: pointer;
          color: #888;
        }
        .checkbox-group {
          display: flex;
          gap: 8px;
          font-size: 14px;
          margin-bottom: 20px;
        }
        .checkbox-group input {
          transform: scale(1.1);
        }
        .checkbox-group a {
          color: var(--accent);
          text-decoration: none;
        }
        .checkbox-group a:hover {
          text-decoration: underline;
        }
        button {
          width: 100%;
          padding: 12px;
          background-color: var(--primary);
          color: var(--white);
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
        button:hover {
          background-color: var(--accent);
        }
        footer {
          background-color: #0f172a;
          color: #f1f5f9;
          padding: 20px 40px;
          text-align: center;
        }
        .social-icons {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          gap: 16px;
        }
        .social-icons a {
          color: #cbd5e1;
          font-size: 16px;
          text-decoration: none;
        }
        .social-icons a:hover {
          color: var(--accent);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="page-bg"></div>

      <nav>
        <h1>GramaLink <span className="gov-tag">| Govt Portal</span></h1>
      </nav>

      <div className="form-wrapper">
        {step === 'signup' ? (
          <div className="container">
            <h2>Create Your Account</h2>
            <p className="subtext">Join GramaLink to raise your voice and track your concerns</p>
            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />

              <label>Email or Phone</label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} required />

              <label>Password</label>
              <div className="input-group">
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} required />
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`} onClick={() => toggleVisibility('password')} />
              </div>

              <label>Confirm Password</label>
              <div className="input-group">
                <input type={showConfirm ? 'text' : 'password'} name="confirm" value={formData.confirm} onChange={handleChange} required />
                <i className={`fas ${showConfirm ? 'fa-eye-slash' : 'fa-eye'} password-toggle`} onClick={() => toggleVisibility('confirm')} />
              </div>

             <div className="checkbox-group">
  <input
    type="checkbox"
    name="terms"
    checked={formData.terms}
    onChange={handleChange}
  />
  <label>
    I agree to the{' '}
    <Link to="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link>

  </label>
</div>


              <button type="submit">Sign Up</button>
            </form>
          </div>
        ) : (
          <div className="container">
            <h2>Email Verification</h2>
            <p className="subtext">A verification code has been sent to your email.</p>
            <label>Enter Code</label>
            <input
              type="text"
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value)}
              placeholder="Enter 6-digit code"
            />
            <button onClick={handleVerify}>Verify Email</button>
          </div>
        )}
      </div>

      <footer>
        <div>Contact: support@GramaLink.gov.in | 1800-123-456</div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-linkedin-in" /></a>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;
