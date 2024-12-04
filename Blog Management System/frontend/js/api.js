import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Sign up API
export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/signup`, userData);
        return response.data;
    } catch (err) {
        console.error('Error signing up:', err);
        throw err;
    }
};

// Login API
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/login`, userData);
        return response.data;
    } catch (err) {
        console.error('Error logging in:', err);
        throw err;
    }
};

// Fetch all blog posts
export const fetchBlogPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blogPosts`);
        return response.data;
    } catch (err) {
        console.error('Error fetching blog posts:', err);
        throw err;
    }
};
