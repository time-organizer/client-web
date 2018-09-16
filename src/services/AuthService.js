/* eslint-env browser */
import decode from 'jwt-decode';

const AuthService = {
  isTokenExpired: token => decode(token).exp < (Date.now() / 1000),
  getTokenDecoded: token => decode(token),

  getToken: () => localStorage.getItem('auth-token'),

  loggedIn: () => {
    const token = AuthService.getToken();
    return !!token && !AuthService.isTokenExpired(token);
  },

  getProfile: () => decode(AuthService.getToken()),

  setToken(token) {
    localStorage.setItem('auth_token', token);
  },
};

export default AuthService;
