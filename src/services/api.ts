// import axios from 'axios';
// import { Movie, MovieDetails, Genre } from '../types/movie';
//
// const API_KEY = 'ваш_api_ключ';
// const BASE_URL = 'https://api.themoviedb.org/3';
//
// export const fetchMovies = async (query: string): Promise<Movie[]> => {
//     const response = await axios.get(
//         `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
//     );
//     return response.data.results;
// };
//
// export const fetchPopularMovies = async (): Promise<Movie[]> => {
//     const response = await axios.get(
//         `${BASE_URL}/movie/popular?api_key=${API_KEY}`
//     );
//     return response.data.results;
// };
//
// export const fetchMovieDetails = async (id: number): Promise<MovieDetails> => {
//     const response = await axios.get(
//         `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
//     );
//     return response.data;
// };
//
// export const fetchGenres = async (): Promise<Genre[]> => {
//     const response = await axios.get(
//         `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
//     );
//     return response.data.genres;
// };














import { mockMovies, mockGenres } from '../mocks/movies';
import { Movie, MovieDetails, Genre } from '../types/movie';

const simulateNetworkDelay = () =>
    new Promise(resolve => setTimeout(resolve, 300));

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    await simulateNetworkDelay();

    if (query) {
        return mockMovies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
    }
    return mockMovies;
};

export const fetchPopularMovies = async (): Promise<Movie[]> => {
    await simulateNetworkDelay();
    return mockMovies;
};

export const fetchMovieDetails = async (id: number): Promise<MovieDetails> => {
    await simulateNetworkDelay();

    // Возвращаем разные данные в зависимости от ID
    const movie = mockMovies.find(m => m.id === id);

    if (!movie) {
        throw new Error('Movie not found');
    }

    return {
        // ...mockMovieDetails,
        ...movie,
        runtime: 120 + (id % 10) * 5, // Примерная логика для разного времени
        genres: mockGenres.slice(0, 1 + (id % 3)) // Разное количество жанров
    };
};

export const fetchGenres = async (): Promise<Genre[]> => {
    await simulateNetworkDelay();
    return mockGenres;
};