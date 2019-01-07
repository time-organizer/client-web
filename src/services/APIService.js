/* eslint-env browser */
import axios from 'axios';
import AuthService from './AuthService';

const {
  REACT_APP_DATA_FLOW_URL = 'https://localhost:3001',
} = process.env;


const APIService = {
  getToken: () => localStorage.getItem('auth_token'),

  get: url => axios.get(`${REACT_APP_DATA_FLOW_URL}${url}`, {
    headers: {
      auth_token: APIService.getToken(),
    },
  })
    .then(res => res)
    .catch((err) => {
      const { response: { status } } = err;

      if (status === 401) {
        AuthService.logout();
      }

      throw err;
    }),

  post: (url, body, config) => axios.post(`${REACT_APP_DATA_FLOW_URL}${url}`, body, {
    ...config,
    headers: {
      auth_token: APIService.getToken(),
    },
  })
    .then(res => res)
    .catch((err) => {
      const { response: { status } } = err;

      if (status === 401) {
        AuthService.logout();
      }

      throw err;
    }),

  put: (url, body, config) => axios.put(`${REACT_APP_DATA_FLOW_URL}${url}`, body, {
    ...config,
    headers: {
      auth_token: APIService.getToken(),
    },
  })
    .then(res => res)
    .catch((err) => {
      const { response: { status } } = err;

      if (status === 401) {
        AuthService.logout();
      }

      throw err;
    }),
};

export default APIService;
