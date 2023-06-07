import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-backend-api-url',
  // You can add any additional Axios configurations here
});

export default instance;