/* eslint-env browser */
import axios from 'axios';

const {
  REACT_APP_DATA_FLOW_URL = 'https://localhost:3001',
} = process.env;


const APIService = {
  getToken: () => localStorage.getItem('auth_token'),

  get: url => axios.get(`${REACT_APP_DATA_FLOW_URL}${url}`, {
    headers: {
      auth_token: APIService.getToken(),
    },
  }),

  post: (url, body, config) => axios.post(`${REACT_APP_DATA_FLOW_URL}${url}`, body, {
    ...config,
    headers: {
      auth_token: APIService.getToken(),
    },
  }),

  put: (url, body, config) => axios.put(`${REACT_APP_DATA_FLOW_URL}${url}`, body, {
    ...config,
    headers: {
      auth_token: APIService.getToken(),
    },
  }),
};

export default APIService;
