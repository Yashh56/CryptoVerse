import axios from 'axios';

const BASE_URL = 'https://rest.coincap.io/v3';
const API_KEY = import.meta.env.VITE_API_KEY;

class API {
  static get = (path, config = {}) => {
    return axios.get(`${BASE_URL}${path}`, {
      ...config,
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        ...config.headers,
      },
    });
  };
}

export default API;
