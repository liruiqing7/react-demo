import { message } from 'antd';
import axios from 'axios';
import { getIn } from '../helpers/util';

const API = axios.create({
  baseURL: '/',
  timeout: 10000
});

// 请求拦截
API.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
API.interceptors.response.use(
  (response) => {
    const { data, request } = response;
    if (data.code !== 0 || typeof response.data !== 'object') {
      console.error(response, 'response');

      const msg = getIn(['msg'], JSON.parse(request.response), 'api error');
      message.error(`接口请求失败 : ${msg}`);
    }
    return response.data;
  },
  (error) => {
    message.info('请求失败');
    return Promise.reject(error);
  }
);

export default API;
