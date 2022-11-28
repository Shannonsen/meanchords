import axios from "axios";
const API_URL = "http://localhost:8082";
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

const getUser = (idUser) => {
    return axios
        .get(API_URL + '/api/User/GET', {
            params: {
                UserId: idUser
            }
        })
        .then((response) => {
            return response;
        });
}

const login = (email, password) => {
    return axios
        .post(API_URL + '/api/Login/POST', {
            email,
            password,
        })
        .then((response) => {
            sessionStorage.setItem("userID", JSON.stringify(response.data.Data.UserID));
            sessionStorage.setItem("user", JSON.stringify(response.data.Data.User));
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
    getUser,
}

export default authService;

