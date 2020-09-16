import axios from "axios";

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });
  //2.axios的拦截
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      //一定要记得return出去
      return config;
    },
    err => {
      // console.log(err);
    }
  );

  instance.interceptors.response.use(
    res => {
      // console.log(res);
      //返回处理结果
      return res.data;
    },
    err => {
      // console.log(err);
    }
  );

  //3.发送真正的网络请求
  return instance(config);
}
