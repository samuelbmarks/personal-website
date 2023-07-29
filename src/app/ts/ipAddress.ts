import axios from 'axios';

// Function to fetch the user's IP address using ipify API
async function getUserIPAddress() {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return 'N/A';
  }
}

export default getUserIPAddress;
