import axios from 'axios';
console.log(import.meta);
const endpoint = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

const getBooks = (signal) => endpoint.get('/books', { signal });
const postBooks = (payload, signal) => endpoint.post('/books', payload, { signal });
const getCartItems = (signal) => endpoint.get('/cartItems', { signal });

const postCartItems = (payload, signal) => {
  return endpoint.post('/cartItems', payload, { signal });
};

const deleteCardItems = (id, signal) => {
  return endpoint.delete(`/cartItems/${id}`, {
    signal,
  });
};
const putCartItem = (id, payload, signal) => {
  return endpoint.delete(`/cartItems/${id}`, {
    signal,
  });
};

const api = {
  getBooks,
  postBooks,
  getCartItems,
  postCartItems,
  deleteCardItems,
  putCartItem,
};
export default api;
