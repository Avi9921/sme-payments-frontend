import axios from 'axios';

const API_BASE_URL = 'http://localhost:8888/api';

const EmployeeService = {
  addEmployee: async (employee) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/addEmployee`, employee);
      return response.data;
    } catch (error) {
      console.error('Error adding employee:', error);
      throw error;
    }
  },

  getAllEmployees: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/employees`);
      return response.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  }
};

export default EmployeeService;
