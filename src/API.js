import axios from 'axios'

export const api = {
    getAllPosts: async () => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
        return response.data;
    }
}


