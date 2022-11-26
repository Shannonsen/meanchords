import axios from "axios";
const API_URL = "http://4ed8-131-196-246-22.ngrok.io";
/* const API_URL = "http://www.discoschowell-api.somee.com"; */
/* const navigate = useNavigate(); */
const signup = (name, lastname, email, password) => {
    return axios
        .post(API_URL + '/api/User/POST', {
            Name: name,
            LastName: lastname,
            Email: email,
            Password: password,
        })
        .then((response) => {
            alert(response.data.status)
            if (response.data.status) {
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
            sessionStorage.setItem("user", JSON.stringify(response.data));
            sessionStorage.setItem("userID", JSON.stringify(response.data.Data.UserID));
            return response;
        });
};
const logout = () => {
    sessionStorage.removeItem("user");
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

