/* eslint-env browser */
import decode from 'jwt-decode';
import history from '../history';

const AuthService = {
  isTokenExpired: token => decode(token).exp < (Date.now() / 1000),

  getTokenDecoded: token => decode(token),

  getToken: () => localStorage.getItem('auth_token'),

  loggedIn: () => {
    const token = AuthService.getToken();
    return !!token && !AuthService.isTokenExpired(token);
  },

  setToken(token) {
    localStorage.setItem('auth_token', token);
  },

  logout() {
    localStorage.removeItem('auth_token');
    history.push('/auth');
  },
};

export default AuthService;
