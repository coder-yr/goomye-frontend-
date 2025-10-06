import api from './index';

export const authAPI = {
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  
  register: (userData: any) => 
    api.post('/auth/register', userData),
  
  forgotPassword: (email: string) => 
    api.post('/auth/forgot-password', { email }),
  
  resetPassword: (token: string, password: string) => 
    api.post('/auth/reset-password', { token, password }),
    
  verifyEmail: (token: string) => 
    api.post('/auth/verify-email', { token }),
};

export const productsAPI = {
  getAll: (params?: any) => 
    api.get('/products/list', { params }),
  
  getById: (id: string) => 
    api.get(`/products/${id}`),
  
  getReviews: (productId: string) => 
    api.get(`/products/${productId}/reviews`),
  
  addReview: (productId: string, review: any) => 
    api.post(`/products/${productId}/reviews`, review),
};

export const ordersAPI = {
  getAll: (params?: any) => 
    api.get('/orders', { params }),
  
  getById: (id: string) => 
    api.get(`/orders/${id}`),
  
  track: (id: string) => 
    api.get(`/orders/${id}/track`),
};

export const cartAPI = {
  get: () => 
    api.get('/cart'),
  
  add: (productId: string, quantity: number) => 
    api.post('/cart', { productId, quantity }),
  
  update: (productId: string, quantity: number) => 
    api.put('/cart', { productId, quantity }),
  
  remove: (productId: string) => 
    api.delete(`/cart/${productId}`),
};

export const returnsAPI = {
  getEligibleProducts: () => 
    api.get('/returns/products'),
  
  submitReason: (data: any) => 
    api.post('/returns/reasons', data),
  
  getDeliveryOptions: () => 
    api.get('/returns/delivery-options'),
  
  getRefundOptions: () => 
    api.get('/returns/refund-options'),
  
  confirm: (data: any) => 
    api.post('/returns/confirm', data),
};