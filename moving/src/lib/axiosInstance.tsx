import axios from 'axios';

export const authAxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQ2MDZlYzRjNzE3ZWJkNzJjOGIwYzE4NGE1OWFlYSIsIm5iZiI6MTczMDY0Mzg5OS45ODQxNzE5LCJzdWIiOiI2NzI3ODY0ODU1NDA4M2E1NmEwZDZhNzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.e4_-aYNFSDfybw04xTSY0JGPbWVbpcnt-cvsVL3fPyc',
  },
});
