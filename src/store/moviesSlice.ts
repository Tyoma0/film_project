import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Movie, Genre } from '../types/movie';
import {
    fetchPopularMovies,
    fetchMovies,
    fetchGenres,
} from '../services/api';




type MoviesState ={
    list: Movie[];
    genres: Genre[];
    loading: boolean;
    error: string | null;
}

const initialState: MoviesState = {
    list: [],
    genres: [],
    loading: false,
    error: null,
};

export const loadPopularMovies = createAsyncThunk(
    'movies/loadPopular',
    async () => {
        return await fetchPopularMovies();
    }
);

export const searchMovies = createAsyncThunk(
    'movies/search',
    async (query: string) => {
        return await fetchMovies(query);
    }
);

export const loadGenres = createAsyncThunk(
    'movies/loadGenres',
    async () => {
        return await fetchGenres();
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPopularMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadPopularMovies.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(loadPopularMovies.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to load movies';
                state.loading = false;
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(loadGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            });
    },
});

export default moviesSlice.reducer;