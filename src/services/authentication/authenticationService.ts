/* eslint-disable */
import api from '~services/api';
import { handleLoginError, handleRegisterError, handleProfileError } from '~services/authentication/authenticationHelper';

export function loginUser(email: string, password: string): Promise<{ data: { token: string } }> {
  return new Promise((resolve, reject) => {
    if (email === 'admin@admin.com' && password === 'admin') setTimeout(() => resolve({ data: { token: 'token' } }), 1500);
    else setTimeout(() => reject({ response: { status: 400 } }), 1500);
  })
    .then((response: any) => {
      window.localStorage.setItem('token', response.data.token);
      return response.data.token;
    })
    .catch(handleLoginError);
}

export function refreshToken(accessToken: string): Promise<string> {
  window.localStorage.setItem('token', accessToken);
  return Promise.resolve(accessToken);
}

export function registerUser(email: string, firstname: string, lastname: string, password: string): Promise<any> {
  return api
    .post('/user/register/', { email, first_name: firstname, last_name: lastname, password, password_2: password })
    .catch(handleRegisterError);
}
