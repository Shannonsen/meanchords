import axios from "axios";
const API_URL = "http://localhost:8082";
/* const API_URL = "http://a7be-131-196-246-22.ngrok.io";  */

const getQuantyDisc = (num) => {
    return axios
        .get(API_URL + '/api/Disc/GETLAST',{
            params: {
                Quantity: num,
            }
        })
        .then((response) => {
            return JSON.stringify(response.data.Data);
        });
};

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

const deleteShoppingCart = (userId, discId) => {
    return axios
        .delete(API_URL + '/api/ShoppingCar/DELETE', {
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
            return JSON.stringify(response.data.Data);
        });
}

const getByCategory = (idCategory) => {
    return axios
        .get(API_URL + '/api/Disc/GETBYCATEGORY', {
            params: {
                CategoryId: idCategory
            }
        })
        .then((response) => {
            return JSON.stringify(response.data.Data);
        });
}

const getByTitle = (title) => {
    return axios
        .get(API_URL + '/api/Disc/GETBYTITLE', {
            params: {
                Title: title
            }
        })
        .then((response) => {
            return JSON.stringify(response.data.Data);
        });
}

const postSale = (total, delivery, address, user) => {
    return axios
        .post(API_URL + '/api/Sale/POST', {
            Total: total,
            DeliveryService: delivery,
            AddressId: address,
            UserId: user,
        })
        .then((response) => {
            return response.data;
        });
};

const shopServices = {
    getAllDiscs,
    getQuantyDisc,
    getDisc,
    getShoppingCart,
    getAllCategories,
    postShoppingCart,
    deleteShoppingCart,
    getByCategory,
    getByTitle,
    postSale,
}

export default shopServices;