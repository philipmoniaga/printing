import axios from 'axios';

export const axiosClientHandler = axios.create({
  timeout: 50000,
});

export const axiosServiceHandler = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 50000,
});
