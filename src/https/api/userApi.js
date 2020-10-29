import httpClient from '../connect/httpClient';
import axios from 'axios';
// export const registerUserApi = (data) => {
//   const endPoint = '/api/user';
//   return httpClient.app.post(endPoint, data);
// };
export const registerUserApi = (data) => {
  return axios.post('http://localhost:5035/api/user', data);
};
