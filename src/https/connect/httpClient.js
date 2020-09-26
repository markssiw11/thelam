import axios from 'axios';

const app = axios.create({
  baseURL: '', //config.host.rootApi
  headers: {
    'x-rapidapi-host': 'GoodreadsraygorodskijV1.p.rapidapi.com',
    'x-rapidapi-key': '2c09b00152mshb4d6ee675c3a794p11b4fbjsn1fbed886b7b9',
    'content-type': 'application/x-www-form-urlencoded',
    useQueryString: true,
  },
});
export default {
  app,
};
