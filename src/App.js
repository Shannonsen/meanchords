import axios from "axios";
import React from "react";

/* const baseURL = "https://jsonplaceholder.typicode.com/posts/1"; */
const baseURL = "http://localhost:82/api/ExampleValue";

export default function App() {
  const [post, setPost] = React.useState(null);

  /*  React.useEffect(() => {
      getUsers();
    }, []);
  
    async function getUsers() {
      const response = await fetch(baseURL);
      const users = await response.json();
      setPost(users);
    } */


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    });
  }, []);

  /*     React.useEffect(() => {
        axios.get("http://localhost:82/api/ExampleValue")
        .then(res => setPost(res.data))
        .catch(err => console.log(err));
    }, []);
   */

  if (!post) return 'No se obtuvieron los datos';

  return (
    <div>
      <h1>{post["Data"][1].ExampleValue}</h1>
      {/*       <p>{post.temperatureC}</p>
      <p>{post.summary}</p> */}
    </div>
  );
}