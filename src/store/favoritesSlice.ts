import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/movie';


type FavoritesState={
    list: Movie[];
}


const loadFromLocalStorage = (): Movie[] => {
    const data = localStorage.getItem('favorites');
    return data ? JSON.parse(data) : [];
};

const initialState: FavoritesState = {
    list: loadFromLocalStorage(),
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<Movie>) => {
            if (!state.list.some((movie) => movie.id === action.payload.id)) {
                state.list.push(action.payload);
                localStorage.setItem('favorites', JSON.stringify(state.list));
            }
        },
        removeFromFavorites: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter((movie) => movie.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.list));
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;