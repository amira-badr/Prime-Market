import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// الـ Layouts
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';

// صفحات العميل المستقلة 
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact' ;      

// لوحة تحكم الـ Admin
import AdminDashboard from '../pages/admin/Dashboard';
import AdminOrders from '../pages/admin/Orders';
import AdminProducts from '../pages/admin/Products';
import AdminUsers from '../pages/admin/Users';

// لوحة تحكم الـ Vendor
import VendorDashboard from '../pages/vendor/Dashboard';
import VendorProducts from '../pages/vendor/Products';
import VendorOrders from '../pages/vendor/Orders';
import VendorAddProduct from '../pages/vendor/AddProduct';
const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} /> {/* 👈 تم إضافة مسار صفحة التواصل هنا بنجاح */}
      </Route>

      
      
      <Route path="/admin" element={<DashboardLayout role="admin" />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>

    
    
      <Route path="/vendor" element={<DashboardLayout role="vendor" />}>
        <Route path="dashboard" element={<VendorDashboard />} />
        <Route path="products" element={<VendorProducts />} />
        <Route path="orders" element={<VendorOrders />} />
        <Route path="add-product" element={<VendorAddProduct />} />
      </Route>

      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;