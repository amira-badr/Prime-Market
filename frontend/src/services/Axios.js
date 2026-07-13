import axios from 'axios';

const api = axios.create({
  // الرابط الجديد الفعلي والمحدث ليتوافق مع الـ CORS والسيكرت كي
 baseURL: 'https://prime-market-srjl.vercel.app/',
  withCredentials: true, 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;