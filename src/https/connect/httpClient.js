import axios from 'axios';

const app = axios.create({
  baseURL: '',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'kvstore.p.rapidapi.com',
    'x-rapidapi-key': '2c09b00152mshb4d6ee675c3a794p11b4fbjsn1fbed886b7b9',
    useQueryString: true,
  },
});
export default {
  app,
};
