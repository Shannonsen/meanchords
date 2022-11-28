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
            return response;
        });
};

const getShoppingCart = () => {
    return axios
        .get(API_URL + '/api/ShoppingCar/GET')
        .then((response) => {
            console.log(response.data)
            return response;
        });
};

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
}

export default shopServices;