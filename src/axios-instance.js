import axios from 'axios';

const firebaseInstance = axios.create({
  baseURL: 'https://react-travelista.firebaseio.com/'
});

export default firebaseInstance;
