import axios from 'axios';

// ده أهم سطر: بنقوله أي طلب بيبدأ بـ /api يروح للسيرفر اللي جوه الموقع نفسه
const api = axios.create({
  baseURL: '/api', 
});

export default api;