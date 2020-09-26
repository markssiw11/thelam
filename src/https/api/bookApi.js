import httpClient from '../connect/httpClient';

export const getBookApi = () => {
  const endPoint =
    'https://goodreadsraygorodskijv1.p.rapidapi.com/GetlistopiasByBookId';
  return httpClient.app.post(endPoint);
};
