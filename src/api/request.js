import axios from "axios";
// axios配置
// axios.defaults.baseURL = process.env.NODE_ENV;
console.log("环境=", process.env.NODE_ENV);
const instance = axios.create({
  // baseURL: "https://some-domain.com/api/", // 前缀
  timeout: 10000, // 超时时间
  withCredentials: true, // 携带cookie
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Origin": "origin",
    "X-Requested-With": "XMLHttpRequest", // 判断是否为ajax请求
  }, // 请求头
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {

    config.data.timestamp = Date.parse(new Date());
    console.log("拦截成功", config);

    return config;
  },
  (error) => {
    console.log("错误", error);
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (config) => {
    console.log("响应拦截", config);
    return config;
  },
  (error) => {
    console.log("响应err", error);
    return Promise.reject(error);
  }
);


export default instance;
