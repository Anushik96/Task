import axios from 'vue-axios';
export default class HttpService {
    constructor() {
    }

    post(url, params = {}, headers = {}){

        url = '/api/' + url;

        return new Promise((resolve, reject) => {
            axios.post(url, params, {
                headers: headers
            })
                .then(response => resolve(response))
                .catch(error => reject(error));
        })
    }
}
