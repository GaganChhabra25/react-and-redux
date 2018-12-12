// eslint-disable-next-line no-unused-vars
import {notify} from 'react-notify-toast';

class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    resolve(inputUrl) {
        return this.baseUrl+ inputUrl;
    }

    get(inputUrl) {
        const url = this.resolve(inputUrl);
        return fetch(url).then((response) => {
            console.log(response);
            if (!response.ok) {
                ApiService.checkForUnhandledErrorResponse(response);
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject(response);
            }
            if (response.status === 204) {
                return {};
            }
            return response.json();
        })
    }
    static checkForUnhandledErrorResponse(response) {
        if (response.status === 500) {
            notify.show('An unexpected error occurred. Please try again.', 'error');
        }
    }
}
export default ApiService;