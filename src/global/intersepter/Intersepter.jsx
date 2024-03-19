import axios from 'axios';
import { TOKEN } from "../../constant/Index";
import { BASE_URL } from "../../constant/Index";
// import { token } from "../Constants/ApiServices";
// const baseURL = "https://gorest.co.in/public/v2";
const instance = axios.create({
  //   baseURL,
  BASE_URL,
});
instance.interceptors.request.use(
  function (config) {
    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { status } = error.response.status;
    switch (status) {
      case 204:
        console.log("No Content");
        break;
      case 304:
        console.log("not Modified");
        break;
      case 400:
        console.log("Bad Request");
        break;
      case 401:
        console.log("Unauthorized");
        break;
      case 402:
        console.log("Payment Required");
        break;
      case 403:
        console.log("Frobidden");
        break;
      case 404:
        console.log("Not Found");
        break;
      case 405:
        console.log("Method Not Allowed");
        break;
      case 406:
        console.log("Not Acceptable");
        break;
      case 407:
        console.log("Proxy Authentication Required");
        break;
      case 408:
        console.log("Request TimeOut");
        break;
      case 409:
        console.log("Conflit");
        break;
      case 500:
        console.log("Server Error");
        break;
      default:
        console.log("an unknown error occurred");
        break;
    }
    return Promise.reject(error);
  }
);

export default instance;
