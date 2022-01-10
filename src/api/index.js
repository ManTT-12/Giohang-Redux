import axios from 'axios';
//mock API
let API_URL = 'https://619bb5c568ebaa001753c583.mockapi.io';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}