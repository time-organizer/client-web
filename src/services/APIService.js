import axios from 'axios';

const {
  DATA_FLOW_URL = 'localhost:3001',
} = process.env;

const getApiKey = () => '';

const API = {
  get: url => axios.get(`${DATA_FLOW_URL}${url}`, {
    headers: { Authorization: getApiKey() },
  }),

  post: (url, body) => axios.post(`${DATA_FLOW_URL}${url}`, body, {
    headers: {
      Authorization: getApiKey(),
    },
  }),

  put: (url, body) => axios.put(`${DATA_FLOW_URL}${url}`, body, {
    headers: {
      Authorization: getApiKey(),
    },
  }),
};

export default API;
