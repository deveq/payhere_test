import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const setAccessToken = (token: string) => {
    request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};