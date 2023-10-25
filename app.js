
import axios from "axios";

async function getData (user_id){
    
        const { data:users } = await axios ("https://jsonplaceholder.typicode.com/users/" + user_id);
        const { data:posts } = await axios ("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

        console.log("User:",users);
        console.log("User's Posts:",posts);
};


export default getData;