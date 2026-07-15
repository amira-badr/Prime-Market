import axios from 'axios';

const api = axios.create({
  // لو إحنا لايف هيستخدم الرابط النسبي، ولو محلي هيستخدم 5000
  baseURL: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:5000',
  withCredentials: true,
});

export default api;