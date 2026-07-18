import axios from 'axios';

// رجعناه للبورت 5000 زي ما طلبتي
const api = axios.create({
  baseURL: 'http://localhost:5000', 
  withCredentials: true, 
});

export default api;