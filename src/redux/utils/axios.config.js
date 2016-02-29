import axios from 'axios';
class AxiosSettings {
  static baseConfig () {
    // Set base URL
    // axios.defaults.baseURL = 'BASE URL HERE';
  }

  static setAuthHeader () {
    // Set auth headers
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

}

export default AxiosSettings;
