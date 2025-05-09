import axios from 'axios'

// ✅ Instance axios personnalisée
export const api = axios.create({
  baseURL: 'https://api.exemple.com', // à adapter
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// ✅Intercepteur
api.interceptors.request.use((config) => {
  // Ex: ajouter un token automatiquement
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
