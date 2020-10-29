import httpClient from '../connect/httpClient';
import axios from 'axios';

export const getBookApi = () => {
  return axios({
    method: 'GET',
    url: 'https://kvstore.p.rapidapi.com/collections',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'kvstore.p.rapidapi.com',
      'x-rapidapi-key': '2c09b00152mshb4d6ee675c3a794p11b4fbjsn1fbed886b7b9',
      useQueryString: true,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCourses = () => {
  const endPoint = '/api/courses';
  return httpClient.app.get(endPoint);
};
