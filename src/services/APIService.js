/* eslint-env browser */
import axios from 'axios';

const {
  DATA_FLOW_URL = 'http://localhost:3001',
} = process.env;


const APIService = {
  getToken: () => localStorage.getItem('auth_token'),

  get: url => axios.get(`${DATA_FLOW_URL}${url}`, {
    headers: {
      auth_token: APIService.getToken(),
    },
  }),

  post: (url, body) => axios.post(`${DATA_FLOW_URL}${url}`, body, {
    headers: {
      auth_token: APIService.getToken(),
    },
  }),

  put: (url, body) => axios.put(`${DATA_FLOW_URL}${url}`, body, {
    headers: {
      auth_token: APIService.getToken(),
    },
  }),
};

export default APIService;
