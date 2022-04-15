import axios from 'axios'

export const api = {
    getAllPosts: async () => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
        return response.data;
    },

    getAllPhotos: async () => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
        return response.data;
    }
}



