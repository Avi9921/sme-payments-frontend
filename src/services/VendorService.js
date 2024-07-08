import axios from 'axios';

const API_URL = 'http://localhost:8888/api';

const getAllVendors = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching vendors:', error);
    throw error;
  }
};

const addVendor = async (vendor) => {
  try {
    const response = await axios.post(`${API_URL}/addVendor`, vendor);
    return response.data;
  } catch (error) {
    console.error('Error adding vendor:', error);
    throw error;
  }
};

const vendorService = {
  getAllVendors,
  addVendor
};

export default vendorService;
