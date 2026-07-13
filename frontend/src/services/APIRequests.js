import api from './Axios'; 

export const loginUser = (data) => api.post('/auth/login', data);
export const registerUser = (data) => api.post('/auth/register', data);
export const getUserProfile = () => api.get('/auth/profile');


export const getAllProducts = () => api.get('/products');
export const addProduct = (data) => api.post('/products/add', data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);


export const getAllOrders = () => api.get('/orders');
export const createOrder = (data) => api.post('/orders/create', data);