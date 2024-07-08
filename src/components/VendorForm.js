import React, { useState } from 'react';
import axios from 'axios';
import '../Styles.css';

function VendorForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [upi, setUpi] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8888/api/addVendor', { name, email, upi });
      alert('Vendor added successfully!');
      setName('');
      setEmail('');
      setUpi('');
    } catch (error) {
      console.error('Error adding vendor:', error);
    }
  };

  return (
    <div className="center-box">
      <h2>Add Vendor</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>UPI:</label>
        <input type="text" value={upi} onChange={(e) => setUpi(e.target.value)} required />

        <button type="submit">Add Vendor</button>
      </form>
    </div>
  );
}

export default VendorForm;
