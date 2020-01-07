import axios from 'axios';

import { API_URL } from '~constants/apiConstants';

// export default axios.create({
//   baseURL: API_URL,
//   timeout: 5000,
//   headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//     },
// });

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000
});

// Since we will only be using JSON APIs, add Content-Type: application/json to header as default
api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.put['Content-Type'] = 'application/json';
api.defaults.headers.patch['Content-Type'] = 'application/json';

// Since we will only be using JSON APIs, add Accept: application/json to header as default
api.defaults.headers.get.Accept = 'application/json';
api.defaults.headers.post.Accept = 'application/json';
api.defaults.headers.put.Accept = 'application/json';
api.defaults.headers.patch.Accept = 'application/json';

// JWT is going to be saved into cookie
// cookies.save('jwt', response.data.token, { secure: true, httpOnly: true });
// Therefore it will automatically be sent in the header of all API requests
// JWT will not be accessible to JavaScript because it is httpOnly :)

export default api;
