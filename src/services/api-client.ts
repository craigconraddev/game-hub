import axios from "axios";

export default axios.create({
    baseURL: 'https://rawg.io/api',
    params: {
        // Vite looks for variables starting with VITE_
        key: import.meta.env.VITE_RAWG_KEY 
    }
})
