import axiosInstance from "../axios/axiosInstance";

class Request {
  constructor(url) {
    this.url = url;
  }
  get = (params = {}) => {
    return axiosInstance({
      method: "get",
      url: this.url,
      params,
    });
  };
  post = (data = {}) => {
    return axiosInstance({
      method: "post",
      url: this.url,
      data,
    });
  };
  delete = (params = {}) => {
    return axiosInstance({
      method: "delete",
      url: this.url,
      params,
    });
  };
}
export default Request;
