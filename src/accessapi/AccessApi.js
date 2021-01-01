import apiStrings from "../assets/apiStrings";
import AuthenticationService from "../authentication/services/AuthenticationService";

let authenticationService = new AuthenticationService();

let baseUrl;

class AccessApi {
    constructor(apiName) {
        this.determineWhichConnectionStringToUse(apiName);
    }

    determineWhichConnectionStringToUse(apiName) {
        let result = apiStrings.find(apiString => {
            return apiString.name === apiName
        });

        baseUrl = window.location.href.includes("localhost")
            ? result.development
            : window.location.href.includes("test.sartainstudios.com")
                ? result.test
                : result.production
    }

    getData(urlExtension, data) {
        let completeUrl = baseUrl + urlExtension;

        if (data != null)
            completeUrl = completeUrl + "";

        return this.fetch(completeUrl)
    }

    postData(urlExtension, data) {
        const completeUrl = baseUrl + urlExtension;

        const httpMethod = 'POST';

        const headers = {
            'Authorization': 'Bearer ' + authenticationService.getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        const body = JSON.stringify(data);

        const options = {method: httpMethod, headers: headers, body: body};

        return this.fetch(completeUrl, options)
    }

    postFormData(urlExtension, data) {
        const completeUrl = baseUrl + urlExtension;

        const httpMethod = 'POST';

        const headers = {'Authorization': 'Bearer ' + authenticationService.getToken()};

        const body = data;

        const options = {method: httpMethod, headers: headers, body: body};

        return this.fetch(completeUrl, options)
    }

    deleteData(urlExtension, uid) {
        const url = this.state.url + urlExtension;

        return new Promise(function (resolve) {
                fetch(url + uid, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then((result) => {
                            return resolve("Deleted: " + uid)
                        },
                        (error) => {
                            return resolve("Failed to delete: " + uid + " error: " + error)
                        });
            }
        )
    }

    fetch(completeUrl, options) {
        return new Promise(function (resolve) {
                fetch(completeUrl, options)
                    .then(res => res.json())
                    .then((result) => {
                            return resolve(result)
                        },
                        (error) => {
                            return resolve(error)
                        });
            }
        )
    }
}

export default AccessApi;