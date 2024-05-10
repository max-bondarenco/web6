import axios from 'axios';

const baseURLDev = 'http://localhost:1234/api';

export default axios.create({
  baseURL: baseURLDev,
});
