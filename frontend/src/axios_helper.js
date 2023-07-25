import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8081';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data) => {

    let headers = {};
    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data});
};