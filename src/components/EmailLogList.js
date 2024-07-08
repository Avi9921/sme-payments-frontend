import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles.css';

function EmailLogList() {
  const [emailLogs, setEmailLogs] = useState([]);

  const fetchEmailLogs = async () => {
    try {
      const response = await axios.get('http://localhost:8888/api/emails');
      setEmailLogs(response.data);
    } catch (error) {
      console.error('Error fetching email logs:', error);
    }
  };

  useEffect(() => {
    fetchEmailLogs();
  }, []);

  return (
    <div>
      <h2>Email Logs</h2>
      <ul>
        {emailLogs.map(log => (
          <li key={log.id}>
            {log.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmailLogList;
