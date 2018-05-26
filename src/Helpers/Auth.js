class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(token) {
        localStorage.setItem('token', token);
    }

    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
        return JSON.parse(localStorage.getItem('user')) !== null;
    }

    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
        localStorage.removeItem('token');
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */

    static getToken() {
        return JSON.parse(localStorage.getItem('user')).token;
    }
    static authHeader() {
        // return authorization header with jwt token
        let user = JSON.parse(localStorage.getItem('user'));

        if (user && user.token) {
            return { 'Authorization': 'Bearer ' + user.token };
        } else {
            return {};
        }
    }

}

export default Auth;