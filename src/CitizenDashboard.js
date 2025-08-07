import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// 🎯 Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// 🎨 Layout Components
const Page = styled.div`
  font-family: 'Segoe UI', sans-serif;
  background: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: #1e293b;
`;

const Navbar = styled.nav`
  background: #ffffffcc;
  backdrop-filter: blur(10px);
  padding: 16px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #e2e8f0;
`;

const NavLeft = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #1e3a8a;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoutButton = styled.button`
  background: none;
  border: 1px solid #1e3a8a;
  color: #1e3a8a;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  padding: 6px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1e3a8a;
    color: white;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  padding: 2rem 2rem 2rem 0;
  animation: ${fadeIn} 0.7s ease;
`;

const Sidebar = styled.aside`
  background: #ffffffec;
  padding: 1.8rem;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.04);
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  font-size: 15px;

  h4 {
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    padding-left: 1.2rem;
    color: #334155;
  }

  li {
    margin-bottom: 0.6rem;
  }
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.section`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  animation: ${slideIn} 0.5s ease;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const StatCard = styled.div`
  flex: 1;
  min-width: 220px;
  background: linear-gradient(to right, #f8fafc, #e2e8f0);
  border-left: 5px solid #2563eb;
  padding: 1.2rem 1rem;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }

  h4 {
    margin: 0 0 0.3rem;
    color: #1e3a8a;
    font-size: 1rem;
    font-weight: 600;
    padding-right: 32px;
  }

  p {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1e40af;
    margin: 0;
  }
`;

const ProposalCard = styled.div`
  position: relative;
  background: #1e3a8a;
  color: #f8fafc;
  border-radius: 12px;
  padding: 1.2rem 1rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProposalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.6rem;

  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #e0f2fe;
    flex: 1;
  }

  span.status {
    font-size: 0.85rem;
    background-color: #facc15;
    color: #1e293b;
    padding: 0.2rem 0.6rem;
    border-radius: 20px;
    font-weight: 500;
  }
`;

const SmallText = styled.small`
  display: block;
  margin-top: 0.4rem;
  color: #cbd5e1;
  font-size: 0.85rem;
  opacity: 0.9;
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  z-index: 999;
  width: auto;
  white-space: nowrap;
  box-shadow:
    0 0 12px rgba(37, 99, 235, 0.5),
    0 0 24px rgba(59, 130, 246, 0.3),
    0 0 36px rgba(37, 99, 235, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow:
      0 0 16px rgba(37, 99, 235, 0.7),
      0 0 32px rgba(59, 130, 246, 0.6),
      0 0 48px rgba(37, 99, 235, 0.5);
  }
`;



// ✨ Pop-in animation
const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.92) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

// 🌫️ Overlay with blur
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 📦 Modal container with animation
const Modal = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  animation: ${popIn} 0.3s ease-out;
`;

// 📝 Form styling
const Form = styled.form`
  display: flex;
  flex-direction: column;

  input, textarea, select {
    margin-bottom: 0.8rem;
    padding: 0.85rem;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    font-size: 14px;
    background-color: #f8fafc;
    transition: box-shadow 0.2s ease;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #3b82f6;
    }
  }

  button {
    margin-top: 0.5rem;
    padding: 0.85rem;
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 14px rgba(59, 130, 246, 0.3);
    }
  }
`;


const Footer = styled.footer`
  background: #0f172a;
  color: #cbd5e1;
  text-align: center;
  padding: 1rem;
  font-size: 14px;
  margin-top: 2rem;
`;

// 🌐 Main Component
const CitizenDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '', description: '', ward: '', panchayat: '', category: 'Infrastructure',
  });

  const schemes = [
    'Clean Kerala Mission',
    'Smart Village Initiative',
    'Women Empowerment Scheme',
    'Green Energy Panchayat',
    'Rural Connectivity Drive',
    'Health & Sanitation Project',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { ...formData, date: new Date().toLocaleDateString(), status: 'Submitted' };
    setSubmissions([newEntry, ...submissions]);
    setFormData({ title: '', description: '', ward: '', panchayat: '', category: 'Infrastructure' });
    setShowForm(false);
  };

  return (
    <Page>
      <Navbar>
        <NavLeft>GramaLink | Citizen Dashboard</NavLeft>
        <NavRight><LogoutButton>Logout</LogoutButton></NavRight>
      </Navbar>

      <Layout>
        <Sidebar>
          <h4>Panchayat Schemes</h4>
          <ul>{schemes.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </Sidebar>

        <Content>
          <Card>
            <h2>Welcome, Citizen 👋</h2>
            <p>Submit your proposals, track updates, and engage with your Panchayat.</p>
          </Card>

          <StatsRow>
            <StatCard>
              <h4>Total Proposals</h4>
              <p>{submissions.length}</p>
            </StatCard>
            <StatCard>
              <h4>Pending</h4>
              <p>{submissions.filter(s => s.status === 'Submitted').length}</p>
            </StatCard>
            <StatCard>
              <h4>Categories</h4>
              <p>{[...new Set(submissions.map(s => s.category))].length}</p>
            </StatCard>
          </StatsRow>

          <Card>
            <h3>Your Proposals</h3>
            {submissions.length === 0 ? (
              <p>No proposals yet. Click the button below to add one.</p>
            ) : (
              submissions.map((entry, idx) => (
                <ProposalCard key={idx}>
                  <ProposalHeader>
                    <h4>{entry.title}</h4>
                  </ProposalHeader>
                  <p>{entry.description}</p>
                  <SmallText>{entry.category} | {entry.ward} | {entry.panchayat} | {entry.date}</SmallText>
                </ProposalCard>
              ))
            )}
          </Card>
        </Content>
      </Layout>

      <AddButton onClick={() => setShowForm(true)}>➕ Add Proposal</AddButton>

      {showForm && (
        <ModalOverlay>
          <Modal>
            <h3>Submit a Proposal</h3>
            <Form onSubmit={handleSubmit}>
              <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
              <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
              <select name="ward" value={formData.ward} onChange={handleChange} required>
                <option value="">Select Ward</option>
                <option>Ward 1</option>
                <option>Ward 2</option>
              </select>
              <select name="panchayat" value={formData.panchayat} onChange={handleChange} required>
                <option value="">Select Panchayat</option>
                <option>Panchayat A</option>
                <option>Panchayat B</option>
              </select>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option>Infrastructure</option>
                <option>Cleanliness</option>
                <option>Public Services</option>
              </select>
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </Form>
          </Modal>
        </ModalOverlay>
      )}

      <Footer>
        <p>Contact: 1800-123-456 | support@gramalink.gov.in</p>
        <p>© 2025 GramaLink. All rights reserved.</p>
      </Footer>
    </Page>
  );
};

export default CitizenDashboard;
