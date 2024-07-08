import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import VendorList from './components/VendorList';
import VendorForm from './components/VendorForm';
import EmailForm from './components/EmailForm';
import EmailLogList from './components/EmailLogList';
import './Styles.css';

function App() {
  return (
    <Router>
      <nav>
      <h1>Admin Panel</h1>
        <div className="container-nav">
          <Link to="/">Home</Link>
          <Link to="/employees">Employees</Link>
          <Link to="/add-employee">Add Employee</Link>
          <Link to="/vendors">Vendors</Link>
          <Link to="/add-vendor">Add Vendor</Link>
          <Link to="/send-email">Send Email</Link>
          <Link to="/emails">Email Logs</Link>
        </div>
      </nav>
      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add-employee" element={<EmployeeForm />} />
          <Route path="/vendors" element={<VendorList />} />
          <Route path="/add-vendor" element={<VendorForm />} />
          <Route path="/send-email" element={<EmailForm />} />
          <Route path="/emails" element={<EmailLogList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
