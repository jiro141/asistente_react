import axios from 'axios';

const API_URL = 'https://tu-api.com/auth/login'; // Reemplaza con tu endpoint real

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    return response.data; // Devuelve el token y los datos del usuario
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error en la autenticación');
  }
};
