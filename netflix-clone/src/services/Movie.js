import React from 'react'

const Movie = () => {
    const apiNetflix = axios.create({
        baseURL: 'https://api.themoviedb.org/3/discover/',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTc0N2IxYWNiMGJiODYxZjNkNjk0ODQzMmFjZDQxMCIsIm5iZiI6MTcyMTMxNjQ0NS4xNzM4NDYsInN1YiI6IjY2OTkyNjlhNzJkM2VhZTEyM2E1OGFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tboLr4y61YyQGsQ4EMYU2nm3-rr8tPsCxBuKt42_ic',
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

