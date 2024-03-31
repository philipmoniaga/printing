import axios from 'axios';

export const axiosClientHandler = axios.create({
  timeout: 50000,
});
