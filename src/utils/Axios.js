import Axios from 'axios';

const axiosBaseURL = Axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/1/',
});

export default axiosBaseURL;
