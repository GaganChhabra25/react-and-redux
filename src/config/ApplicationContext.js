import ApiService from '../services/api/ApiService';

const Api = new ApiService( `http://${window.location.hostname}:8080/api`);

/* eslint-disable */
export {Api};