import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Leads from './components/Leads';
import CreateLead from './components/CreateLead';
import Admin from './components/Admin';
import CreateUser from './components/CreateUser';
import LeadDetails from './components/LeadDetails';
import './styles.css';

const adminCredentials = {
  email: 'nikit@gmail.com',
  password: 'nikit@123'
};

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedLeads = JSON.parse(localStorage.getItem('leads')) || [];
    setUsers(storedUsers);
    setLeads(storedLeads);
  }, []);

  const handleLogin = (email, password) => {
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setIsAdmin(true);
      setIsSignedIn(true);
      setCurrentUser({ email });
      localStorage.setItem('currentUserEmail', email);
    } else {
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        setIsSignedIn(true);
        setCurrentUser(user);
        localStorage.setItem('currentUserEmail', email);
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const handleUpdateLead = (updatedLead) => {
    const updatedLeads = leads.map(lead =>
      lead.userId === updatedLead.userId ? updatedLead : lead
    );
    setLeads(updatedLeads);
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
  };

  return (
    <Router>
      {isSignedIn && <Navbar isAdmin={isAdmin} />}
      <div className="container">
        <Routes>
          <Route path="/" element={isSignedIn ? <Home leadCount={leads.filter(lead => lead.createdBy === currentUser.email).length} /> : <SignIn onLogin={handleLogin} />} />
          <Route path="/leads" element={isSignedIn ? <Leads leads={leads.filter(lead => lead.createdBy === currentUser.email)} /> : <Navigate to="/" />} />
          <Route path="/create-lead" element={isSignedIn ? <CreateLead onCreateLead={newLead => setLeads([...leads, newLead])} onUpdateLead={handleUpdateLead} leads={leads} /> : <Navigate to="/" />} />
          <Route path="/admin" element={isSignedIn && isAdmin ? <Admin users={users} onAddUser={newUser => setUsers([...users, newUser])} /> : <Navigate to="/" />} />
          <Route path="/create-user" element={isSignedIn && isAdmin ? <CreateUser onAddUser={newUser => setUsers([...users, newUser])} /> : <Navigate to="/" />} />
          <Route path="/lead/:userId" element={<LeadDetails leads={leads} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
