import React from 'react'

const Movie = () => {
    const apiNetflix = axios.create({
        baseURL: 'https://api.themoviedb.org/3/discover/',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            
        },
    });
    const getMovies = async (include_adult, include_video, language, page, sort_by) => {
        try {
            const { data } = await apiNetflix.get(`movie?include_adult=${include_adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default Movie;

