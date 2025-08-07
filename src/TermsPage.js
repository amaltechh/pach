import React, { useState, useEffect } from 'react';

function TermsPage() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    document.title = 'CivicFlow | Terms & Conditions';
  }, []);

  const termsContent = {
    en: (
      <>
        <h3>1. Introduction</h3>
        <p>GramaLink helps citizens connect with local governance. By using our platform, you agree to these terms.</p>
        <h3>2. User Conduct</h3>
        <p>Provide accurate information only. Fake submissions may result in action.</p>
        <h3>3. Privacy</h3>
        <p>Your data is protected and accessed only by authorized officials.</p>
        <h3>4. Limitations</h3>
        <p>GramaLink facilitates communication but doesn’t guarantee official response.</p>
        <h3>5. Changes</h3>
        <p>Terms may update. Continued use means you accept the changes.</p>
        <h3>6. Contact</h3>
        <p>Email: support@GramaLink.gov.in | Call: 1800-123-456</p>
      </>
    ),
    hi: (
      <>
        <h3>1. परिचय</h3>
        <p>GramaLink नागरिकों को स्थानीय प्रशासन से जोड़ता है। प्लेटफॉर्म का उपयोग करके आप इन शर्तों से सहमत होते हैं।</p>
        <h3>2. उपयोगकर्ता आचरण</h3>
        <p>केवल सटीक जानकारी दें। गलत जानकारी देने पर कार्रवाई हो सकती है।</p>
        <h3>3. गोपनीयता</h3>
        <p>आपका डेटा सुरक्षित है और केवल अधिकृत अधिकारियों के लिए सुलभ है।</p>
        <h3>4. सीमाएं</h3>
        <p>GramaLink संवाद का माध्यम है, कार्रवाई की गारंटी नहीं देता।</p>
        <h3>5. परिवर्तन</h3>
        <p>शर्तों में बदलाव हो सकते हैं। प्लेटफॉर्म का निरंतर उपयोग सहमति दर्शाता है।</p>
        <h3>6. संपर्क</h3>
        <p>ईमेल: support@GramaLink.gov.in | फोन: 1800-123-456</p>
      </>
    ),
    ml: (
      <>
        <h3>1. പരിചയം</h3>
        <p>GramaLink നാഗരികരെ നാട്ടിലെ ഭരണത്തോട് ബന്ധിപ്പിക്കുന്നു. ഈ സേവനം ഉപയോഗിക്കുന്നതിലൂടെ, നിങ്ങൾ ഈ വ്യവസ്ഥകൾ അംഗീകരിക്കുന്നു.</p>
        <h3>2. ഉപയോക്തൃ പെരുമാറ്റം</h3>
        <p>ശരിയായ വിവരങ്ങൾ മാത്രമേ സമർപ്പിക്കാവൂ. തെറ്റായ ഉപയോഗം തടയപ്പെടും.</p>
        <h3>3. സ്വകാര്യത</h3>
        <p>നിങ്ങളുടെ ഡാറ്റ സുരക്ഷിതമാണ്; അധികാരമുള്ള ഉദ്യോഗസ്ഥർക്ക് മാത്രമാണ് പ്രവേശനം.</p>
        <h3>4. പരിധികൾ</h3>
        <p>GramaLink ആശയവിനിമയം സാധ്യമാക്കുന്നു, തീരുമാനങ്ങള്ക്ക് ഉത്തരവാദിയല്ല.</p>
        <h3>5. മാറ്റങ്ങൾ</h3>
        <p>വ്യവസ്ഥകൾ പരിഷ്ക്കരിക്കപ്പെടാം. തുടർന്നുള്ള ഉപയോഗം സമ്മതമായി കണക്കാക്കപ്പെടുന്നു.</p>
        <h3>6. ബന്ധപ്പെടുക</h3>
        <p>ഇമെയിൽ: support@GramaLink.gov.in | ഫോൺ: 1800-123-456</p>
      </>
    ),
  };

  return (
    <>
      <style>{`
        :root {
          --primary: #1e3a8a;
          --accent: #2563eb;
          --text: #1f2937;
          --white: #ffffff;
        }
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80') no-repeat center center fixed;
          background-size: cover;
          color: var(--text);
        }
        body::before {
          content: "";
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 50, 0.6);
          z-index: -1;
        }
        nav {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 14px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #d1d5db;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        nav h1 {
          font-size: 22px;
          color: var(--primary);
        }
        .lang-select {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .lang-select label {
          font-weight: 500;
          color: #111;
        }
        .lang-select select {
          padding: 6px 8px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        .terms-wrapper {
          max-width: 1000px;
          margin: 40px auto;
          background-color: var(--white);
          border-radius: 16px;
          padding: 36px 28px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease;
        }
        .terms-wrapper h2 {
          text-align: center;
          font-size: 28px;
          color: var(--primary);
          margin-bottom: 30px;
        }
        .terms-block h3 {
          font-size: 20px;
          color: var(--primary);
          margin-bottom: 10px;
        }
        .terms-block p {
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 14px;
        }
        footer.footer-bar {
          background-color: #0f172a;
          color: #f1f5f9;
          padding: 20px 40px;
          font-size: 14px;
          border-top: 1px solid #1e293b;
        }
        .footer-content {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .contact-info p {
          margin: 0;
          color: #cbd5e1;
        }
        .social-icons {
          display: flex;
          gap: 16px;
        }
        .social-icons a {
          color: #cbd5e1;
          font-size: 16px;
          transition: color 0.3s ease;
          text-decoration: none;
        }
        .social-icons a:hover {
          color: var(--accent);
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @media (max-width: 768px) {
          nav, .footer-content {
            flex-direction: column;
            text-align: center;
          }
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>

      <nav>
        <h1>GramaLink <span className="gov-tag">| Govt Portal</span></h1>
        <div className="lang-select">
          <label htmlFor="langSelect">🌐 Language:</label>
          <select id="langSelect" onChange={handleLanguageChange} value={language}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="ml">മലയാളം</option>
          </select>
        </div>
      </nav>

      <div className="terms-wrapper">
        <h2>Terms & Conditions</h2>
        <div className="terms-block active">
          {termsContent[language]}
        </div>
      </div>

      <footer className="footer-bar">
        <div className="footer-content">
          <div className="contact-info">
            <p><strong>Contact:</strong> support@GramaLink.gov.in | 1800-123-456</p>
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

export default TermsPage;
