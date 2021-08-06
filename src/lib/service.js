import axios from "axios"
 const getData =  async (userId) => {
     const {data : userData} = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
     const {data : userPost } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
     console.log(userData);
     console.log(userPost[0]);
    }

export default getData;