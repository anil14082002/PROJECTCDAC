// src/api/api.js
import axios from 'axios';

// Set up the base URL for the API
const API_URL = 'http://localhost:3003'; 

// Create an Axios instance with default settings
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: Add request and response interceptors if needed
api.interceptors.request.use(
    (config) => {
        // Optionally add token or modify request config here
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors globally
        return Promise.reject(error);
    }
);

export default api;
