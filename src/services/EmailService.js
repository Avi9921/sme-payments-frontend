import axios from 'axios';

const API_URL = 'http://localhost:8888/api/vendors';

const sendEmailToVendors = async (vendors) => {
  try {
    const response = await axios.post(`${API_URL}/send-email`, vendors);
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

const getAllEmailLogs = async () => {
  try {
    const response = await axios.get('/api/emails');
    return response.data;
  } catch (error) {
    console.error('Error fetching email logs:', error);
    throw error;
  }
};

const emailService = {
  sendEmailToVendors,
  getAllEmailLogs
};

export default emailService;
