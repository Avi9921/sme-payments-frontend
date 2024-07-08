import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../Styles.css';

function EmailForm() {
  const [vendors, setVendors] = useState([]);
  const [selectedVendorIds, setSelectedVendorIds] = useState([]);

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

  const handleVendorChange = (vendorId) => {
    setSelectedVendorIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(vendorId)) {
        return prevSelectedIds.filter(id => id !== vendorId);
      } else {
        return [...prevSelectedIds, vendorId];
      }
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const selectedVendors = vendors.filter(vendor => selectedVendorIds.includes(vendor.id));
    try {
      await axios.post(
        'http://localhost:8888/api/vendors/send-email',
        selectedVendors,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert('Email sent successfully!');
      setSelectedVendorIds([]);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <h2>Send Email to Vendors</h2>
      <form onSubmit={handleSendEmail}>
        <label>Select Vendors:</label>
        <div>
          {vendors.map((vendor) => (
            <div key={vendor.id}>
              <input
                type="checkbox"
                value={vendor.id}
                checked={selectedVendorIds.includes(vendor.id)}
                onChange={() => handleVendorChange(vendor.id)}
              />
              {vendor.name}
            </div>
          ))}
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default EmailForm;
