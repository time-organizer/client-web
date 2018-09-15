/* eslint-env browser */
import axios from 'axios';

const {
  DATA_FLOW_URL = 'http://localhost:3001',
} = process.env;


const APIService = {
  getToken: () => localStorage.getItem('auth-token'),

  get: url => axios.get(`${DATA_FLOW_URL}${url}`, {
    headers: {
      'x-auth-token': APIService.getToken(),
    },
  }),

  post: (url, body) => axios.post(`${DATA_FLOW_URL}${url}`, body, {
    headers: {
      'x-auth-token': APIService.getToken(),
    },
  }),

  put: (url, body) => axios.put(`${DATA_FLOW_URL}${url}`, body, {
    headers: {
      'x-auth-token': APIService.getToken(),
    },
  }),
};

export default APIService;
