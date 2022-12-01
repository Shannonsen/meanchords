import axios from "axios";

const API_URL = 'http://localhost:8082/';

const putDisc = (disc) => {
  console.log(disc);
  return axios.put(API_URL + `/api/Disc/PUT?DiscId=${disc.DiscId}`,{
    Name: disc.name,
    Description: disc.description,
    DiscImgUrl: disc.imgUrl,
    Price: disc.price,
    Amount: disc.amount,
    Categories: disc.tags.map(tag => {return {CategoryId : tag.value}})
  })
  .then((response) => {
    return response;
  })
}

const postDisc = (disc) => {
  console.log("Post", disc);
  return axios.post(API_URL + '/api/Disc/POST',{
    
    Name: disc.name,
    Description: disc.description,
    DiscImgUrl: disc.imgUrl,
    Price: disc.price,
    Amount: disc.amount,
    AuthorID: disc.author.value,
    Categories: disc.tags.map(tag => {return {CategoryId : tag.value}})
  })
  .then((response) => {
    return response;
  })
}

const deleteDisc = (id) => {
  return axios.delete(API_URL + '/api/Disc/DELETE',{
    params: {
      DiscId: id
    }
  })
  .then((response) => {
    return response;
  })
}

const getAllAuthors = () => {
  return axios
  .get(API_URL + '/api/Author/GETALL')
  .then((response) => {
      return JSON.stringify(response.data.Data);
  });
}

const discManager = {
  postDisc,
  putDisc,
  deleteDisc,
  getAllAuthors
}

export default discManager;