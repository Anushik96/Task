import HttpService from "./HttpService";

export default class HomeService extends HttpService {

    /**
     * Registration
     *
     * @param params
     * @param headers
     */
    registration(params = {}, headers = {}) {

        return new Promise((resolve, reject) => {
            try {
                let result = this.post('register', params, headers);
                resolve(result)
            } catch (error) {
                reject(error)
            }

        }).then(result => result.data).catch(err => err)
    }
}