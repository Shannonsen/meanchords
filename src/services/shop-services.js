import axios from "axios";
const API_URL = "http://localhost:8082";

const getAllDiscs = () => {
    return axios
        .get(API_URL + '/api/Disc/GETALL')
        .then((response) => {
            return JSON.stringify(response.data.Data);
        });
};

const getDisc = (id) => {
    return axios
        .get(API_URL + '/api/Disc/GET', {
            params: {
                DiscId: id,
            }
        })
        .then((response) => {
            console.log(response.data)
            return JSON.stringify(response.data.Data);
        });
};

const getShoppingCart = (idUser) => {
    return axios
        .get(API_URL + '/api/ShoppingCar/GET', {
            params: {
                UserId: idUser
            }
        })
        .then((response) => {
            return JSON.stringify(response.data.Data.WishList);
        });
};

const postShoppingCart = (userId, discId) => {
    return axios
    .post(API_URL + '/api/ShoppingCar/POST', {
        UserId: userId,
        DiscId: discId,
    })
    .then((response) => {
        return response;
    });
}


const getAllCategories = () => {
    return axios
    .get(API_URL + '/api/Category/GET')
    .then((response) => {
        console.log(response.data)
        return response;
    });
}

const shopServices = {
    getAllDiscs,
    getDisc,
    getShoppingCart,
    getAllCategories,
    postShoppingCart,
}

export default shopServices;