/* eslint-env browser */
import axios from 'axios';
import decode from 'jwt-decode';

const {
  DATA_FLOW_URL = 'localhost:3001',
} = process.env;


const APIService = {
  isTokenExpired: token => decode(token).exp < Date.now() / 1000,

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
