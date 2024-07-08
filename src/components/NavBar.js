import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

function Navbar() {
  return (
    <nav>
      <div>
        <h1>Admin Panel</h1>
        <Link to="/">Home</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/add-employee">Add Employee</Link>
        <Link to="/vendors">Vendors</Link>
        <Link to="/add-vendor">Add Vendor</Link>
        <Link to="/send-email">Send Email</Link>
        <Link to="/emails">Email Logs</Link>
      </div>
    </nav>
  );
}

export default Navbar;
