import axios from 'axios';

export const api = axios.create({ 
  baseURL: 'https://nodeapi-nqw7.onrender.com'
  //'https://nodeapi-5rqa.onrender.com/'
});
