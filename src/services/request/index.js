import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class AirRequest {
  constructor(baseURL = BASE_URL, timeout = TIME_OUT) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => {
      return res.data;
    }, err => {
      throw err;
    })
  }


  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({...config, method: 'GET'})
  }

  post(config) {
    return this.request({...config, method: 'POST'})
  }
}

const request = new AirRequest();


export default request