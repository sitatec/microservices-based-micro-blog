const axios = require("axios");

export default class ApiClient {
  get(url) {
    return axios.get(url);
  }

  post(url, data) {
    return axios.post(url, data);
  }
}
