import axios from 'axios';

import { API_URL_JSON_SERVER } from '../constant';

const headers = {
  'Content-Type': 'application/json',
};

const api = axios.create({
  baseURL: API_URL_JSON_SERVER,
  headers,
});

export { api };
