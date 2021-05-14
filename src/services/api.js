import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8001',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
