import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const tracker = axios.create({ baseURL: 'http://0b432641f45b.ngrok.io' });

tracker.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  error => Promise.reject(error)
);

export { tracker };
