/* eslint-env browser */
import axios from 'axios';
import AuthService from './AuthService';

const {
  REACT_APP_DATA_FLOW_URL = 'http://localhost:3001',
  REACT_APP_STATS_FLOW_URL = 'http://localhost:3002',
} = process.env;

const getServiceUrl = (url) => {
  if (url.startsWith('/api') || url.startsWith('/auth')) {
    return REACT_APP_DATA_FLOW_URL;
  }

  if (url.startsWith('/stats')) {
    return REACT_APP_STATS_FLOW_URL;
  }

  return '';
};


const APIService = {
  getToken: () => localStorage.getItem('auth_token'),

  get: url => axios.get(`${getServiceUrl(url)}${url}`, {
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

  post: (url, body, config) => axios.post(`${getServiceUrl(url)}${url}`, body, {
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

  put: (url, body, config) => axios.put(`${getServiceUrl(url)}${url}`, body, {
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
