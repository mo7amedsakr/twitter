import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://twitter-full-stack-app.herokuapp.com/api/v1',
  withCredentials: true,
});

export default instance;
