import axios from "axios";
import LocalSetting from "../localSetting";
import {toast} from "react-toastify";
const urlNotToken = ["/login"];
const axiosInstance = axios.create({
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
  baseURL: LocalSetting.baseUrl(),
});

axiosInstance.defaults.headers.post["Accept"] =
  "application/x-www-form-urlencoded";
axiosInstance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

axiosInstance.interceptors.request.use(
  (request) => {
    if (typeof window !== "undefined") {
      const isUrl = urlNotToken.some((url) => request.url.includes(url));
      if (!isUrl) {
        const token = localStorage.getItem("token");
        request.headers = {
          Authorization: `${token}`,
        };
      }
    }

    return request;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const {
      response: {
        status,
        data: { msg: message },
      },
    } = error;
    console.log(status , message)
    if (status === 402) {
        toast.error(message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
