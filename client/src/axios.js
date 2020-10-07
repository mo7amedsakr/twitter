import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? // ? 'http://127.0.0.1:4000/api/v1'
        ''
      : 'https://twitter-full-stack-app.herokuapp.com/',
  withCredentials: true,
});

export default instance;
