import axios from 'axios';

// Configuración de Axios
const api = axios.create({
  baseURL: 'https://ikcount.com/iklab', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el Access Token
api.interceptors.request.use((config) => {
  const token = 'dG9ueW1veWE4OTpBUElfS0VZQGVjYWFjODQwMjNiNTdhMjdiOTJiNGM1ZDgwNTVjZTI4MjUzZTY1MzMxYzYwNWFhYjI2NGFkNDMyMGJhZTQxNTM4MmJkMjFiMDE0NGE1YmU4MTI4YzU5NTcwOTllMWEzMzZlNGEyZmQ1YzAxNTQ0MGNjMGQ5ODI2NzEzOTI4ZDcxOklLTEFCMDA1'; 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;