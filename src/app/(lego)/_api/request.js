import axios from 'axios';
/*
    axios请求配置
 */
let instance = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// 请求完成后 进行数据处理
instance.interceptors.response.use(
  ({ data }) => {
    // 如果是对象，则请求成功，否则请求失败
    return typeof data === 'object' ? data : Promise.reject(data);
  },
  error => {
    if (error.message.code !== 200) {
      alert('网络错误！');
      return Promise.reject(error);
    }
    return Promise.reject('手动终止请求');
  }
);
export default instance;
export const GET = (url, params) =>
  instance({
    method: 'get',
    url,
    params,
  });
export const POST = (url, data) =>
  instance({
    method: 'post',
    url,
    data,
  });

export const DELETE = (url, params) =>
  instance.delete(url, {
    params,
  });
