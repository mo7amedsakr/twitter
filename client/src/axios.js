import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? // ? 'http://127.0.0.1:4000/api/v1'
        ''
      : 'https://mighty-refuge-27051.herokuapp.com/api/v1',
  withCredentials: true,
});

export default instance;
