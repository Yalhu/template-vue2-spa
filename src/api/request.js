import axios from "axios";
import { Message } from "element-ui";

const apiBaseUrl = process.env.VUE_APP_API_URL + "/api";

const request = axios.create({
  // baseURL: "http://test.api.xxxx.com/someone",
  baseURL: apiBaseUrl,
  timeout: 50000
});

// request interceptor
request.interceptors.request.use(config => {
  // Do something before request is sent
  // if(TOKEN) config.params.token = TOKEN ;
  return config;
},
error => {
  // do something with request error
  console.log(error); // for debug
  return Promise.reject(error);
}
);

// response interceptor
request.interceptors.response.use(response => {
  const res = response.data;

  // if (res.statusCode === 200) return res;
  if ([401, 10010].includes(res.statusCode)) return location.reload();
  if ([10086, 1100120].includes(res.statusCode)) {
    Message({
      message: res.statusText ? res.statusText : "配置错误消息",
      type: "error",
      duration: 3 * 1000
    });
  }
  return res;
},
error => {
  console.log("err" + error); // for debug
  Message({
    message: "请求接口异常",
    type: "error",
    duration: 3 * 1000
  });
  return Promise.reject(error);
});
export default request;
