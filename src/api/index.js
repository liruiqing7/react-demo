import axios from 'axios';

const API = axios.create({
  // baseURL: 'https://api.gogoup.com',
  baseURL: '/'
});

// 请求拦截器
API.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
