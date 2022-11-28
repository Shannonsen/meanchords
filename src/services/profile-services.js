import axios from "axios";
const API_URL = "http://701f-131-196-246-22.ngrok.io";

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

const profileServices = {
    editprofile,
}

export default profileServices;
