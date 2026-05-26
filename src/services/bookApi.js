import axios from 'axios';

const API_BASE_URL = 'https://6a15efd991ff9a63de08ff83.mockapi.io';
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const getBooks = () => apiClient.get('/books');
export const createBook = (book) => apiClient.post('/books', book);
export const updateBook = (id, book) => apiClient.put(`/books/${id}`, book);
export const deleteBook = (id) => apiClient.delete(`/books/${id}`);

export default apiClient;