import axios from 'axios';

const spoonacular = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Default params
spoonacular.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params['apiKey'] = '59a44800aa82400a9ab95006a97df5b5';
  return config;
});

export default spoonacular;
