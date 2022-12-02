import axios from "axios";
const API_URL = "http://localhost:8082";

const getAllSales = () => {
  return axios
  .get(API_URL + '/api/Sale/GETALL')
  .then((response) => {
      console.log(response.data)
      return JSON.stringify(response.data.Data);
  });
}

const putSale = (id, status) => {
  return axios
  .put(API_URL + `/api/Sale/PUT?saleID=${id}&state=${status}`, {
  })
  .then((response) => {
      console.log(response.data)
      return JSON.stringify(response.data.Data);
  });
}

const salesService = {
  getAllSales,
  putSale,
}

export default salesService;