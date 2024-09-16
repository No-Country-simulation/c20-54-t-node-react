import axios from 'axios';

// Configura la instancia de Axios
const apiClient = axios.create({
  baseURL: 'https://c20-54-t-node-react.onrender.com/api/v1/', // Reemplaza con tu URL base
  headers: {
    'Content-Type': 'application/json',
    "Authorization": 
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGU2NzIxOTZhZjkwNjAyMjNhMTExNyIsImlhdCI6MTcyNjQ1OTgzOSwiZXhwIjoxNzI2NTQ2MjM5fQ.YOYzmYppg5YY8xg18NJBhdesXN8Nbm9e-bUkJ5IagCA"
  },
});

// Función para obtener datos
export const getData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};

// Función para enviar datos
export const postData = async (endpoint, data) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error al enviar datos:', error);
    throw error;
  }
};

// Función para actualizar datos
export const updateData = async (endpoint, data) => {
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar datos:', error);
    throw error;
  }
};

// Función para eliminar datos
export const deleteData = async (endpoint) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar datos:', error);
    throw error;
  }
};