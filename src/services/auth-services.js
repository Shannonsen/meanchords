import axios from "axios";

const API_URL = "http://aa4a-131-196-246-22.ngrok.ioS";

const signup = (name, lastname, email, password) => {
    return axios
        .post(API_URL + '/api/User/POST', {
            Name: name,
            LastName: lastname,
            Email: email,
            Password: password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response;
        });
};

const login = (email, password) => {
    return axios
        .post(API_URL + '/api/Login/POST', {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
}

export default authService;

