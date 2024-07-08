import React, { useState } from 'react';
import axios from 'axios';
import '../Styles.css';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [ctc, setCtc] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8888/api/addEmployee', { name, designation, ctc, email });
      alert('Employee added successfully!');
      setName('');
      setDesignation('');
      setCtc('');
      setEmail('');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="center-box">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Designation:</label>
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />

        <label>CTC:</label>
        <input type="text" value={ctc} onChange={(e) => setCtc(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
