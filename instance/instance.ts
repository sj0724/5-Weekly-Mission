import axios from 'axios';

const INSTANCE = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
});

INSTANCE.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token');
    config.headers['Authorization'] = accessToken;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default INSTANCE;
