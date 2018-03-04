import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://lolhu-forum-toplist.firebaseio.com/'
});

export default instance;
