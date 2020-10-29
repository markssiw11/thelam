import axios from 'axios';
const TIMEOUT = 15000;
const app = axios.create({
  baseURL: 'http://localhost:5035',
  headers: {
    'content-type': 'application/json',
  },
  transformRequest: [
    (data, headers) => {
      // Do whatever you want to transform the data
      return data;
    },
  ],
});
app.defaults.timeout = TIMEOUT;
// Add a request interceptor
app.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(
      '%c Request Success:',
      'color: #4CAF50; font-weight: bold',
      config,
    );
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
app.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log(
      '%c Response Success:',
      'color: #4CAF50; font-weight: bold',
      response,
    );
    return response;
  },
  function (error) {
    // Do something with response error
    console.log(
      '%c Response error:',
      'color: #4CAF50; font-weight: bold',
      error,
    );
    return Promise.reject(error);
    // parse error
  },
);

export default {
  app,
};
