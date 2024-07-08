import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles.css';

function VendorList() {
  const [vendors, setVendors] = useState([]);

  const fetchVendors = async () => {
    try {
      const response = await axios.get('http://localhost:8888/api/vendors');
      setVendors(response.data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className="center-box">
      <h2>Vendor List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>UPI</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(vendor => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.email}</td>
              <td>{vendor.upi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorList;
