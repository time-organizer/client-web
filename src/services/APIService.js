/* eslint-env browser */
import axios from 'axios';

const {
  DATA_FLOW_URL = 'localhost:3001',
} = process.env;


const APIService = {
  get: url => axios.get(`${DATA_FLOW_URL}${url}`, {
    headers: { Authorization: this.getToken() },
  }),

  post: (url, body) => axios.post(`${DATA_FLOW_URL}${url}`, body, {
    headers: {
      Authorization: this.getToken(),
    },
  }),

  put: (url, body) => axios.put(`${DATA_FLOW_URL}${url}`, body, {
    headers: {
      Authorization: this.getToken(),
    },
  }),
};

export default APIService;
