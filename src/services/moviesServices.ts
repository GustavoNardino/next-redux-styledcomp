import { api, requestConfig } from '../utils/config'
// 
const listMovies = async () => {
    const config = requestConfig("GET");
    try {
        const res = await fetch(api + `/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, config)
            .then((res) => res.json())
            .catch((err) => err);
        console.log('service ', res.results)
        return res.results;
    } catch (error) {
        console.log(error);
    }
}

const moviesServices = {
    listMovies
};

export default moviesServices;