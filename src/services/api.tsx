import axios from 'axios';

export const api = axios.create({
  baseURL:  "https://notificationmanagement.azurewebsites.net/api/v1",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }, 
  
});

