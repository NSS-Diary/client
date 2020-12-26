import axios from 'axios';
import { APIEndpoint } from '../environments/environment';

export class AuthService {
  async SignIn(data) {
    try {
      const response = await axios.post(`${APIEndpoint}/api/auth/signin`, data);
      this.setLoginDetails(response.data);
      return response;
    } catch (e) {
      throw new Error(e);
    }
  }

  setLoginDetails(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.user);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getUser() {
    return localStorage.getItem('user');
  }

  removeLoginDetails() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
