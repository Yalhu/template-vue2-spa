import request from "./request";

const apiBasePath = "/";

/**
 * 获取用户信息。
 * @param {string} token - 用户token
 */
export function getDemo(params = {}) {
  return request.get(`${apiBasePath}weather.php`, params);
}

export function postDemo(data, config = {}) {
  return request.post(`${apiBasePath}`, {...data}, { ...config});
}

