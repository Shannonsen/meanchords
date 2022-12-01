import axios from "axios";
const API_URL = "http://localhost:8082";

const editprofile = (name, lastname, email, newemail, password, newpassword) => {
    return axios
        .put(API_URL + '/api/User/PUT', {
            Name: name,
            LastName: lastname,
            CurrentEmail: email,
            NewEmail: newemail,
            CurrentPassword: password,
            NewPassword: newpassword,
        })
        .then((response) => {
            console.log(response.data);
            return response;
        });
};

const getAllAddress = (userId) => {
    return axios
    .get(API_URL + '/api/Address/GET',{
        params: {
            UserId: userId
        }
    })
    .then((response) => {
        console.log(response.data)
        return JSON.stringify(response.data.Data);
    });
}

const postAddress = (country, city, street, houseNumber, cp, userId) => {
    return axios
        .post(API_URL + '/api/Address/POST', {
            Country: country,
            City: city,
            Street: street,
            HouseNumber: houseNumber,
            ZIP: cp,
            UserId: userId,
        })
        .then((response) => {
            return response.data;
        });
};

const profileServices = {
    editprofile,
    getAllAddress,
    postAddress,
}

export default profileServices;
