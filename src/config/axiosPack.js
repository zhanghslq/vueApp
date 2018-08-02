import {
  baseUrl
} from './env'

export default async(url = '', data = {}) => {
  type = type.toUpperCase();
  url = baseUrl + url;
  axios.post(url, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
