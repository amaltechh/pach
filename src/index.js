import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './LoginPage.css';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import TermsPage from './TermsPage';
import CitizenDashboard from './CitizenDashboard'; // ✅ Import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/dashboard" element={<CitizenDashboard />} /> {/* ✅ Added */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
