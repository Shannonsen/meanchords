import axios from "axios";

const API_URL = "http://www.discoschowell-api.somee.com";

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
                sessionStorage.setItem("user", JSON.stringify(response.data));
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
            if (response.Status) {
                sessionStorage.setItem("user", JSON.stringify(response.data));
                console.log(response.data)
                alert("ENTRE");
            }
            return response;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(sessionStorage.getItem("user"));
}

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
}

export default authService;

