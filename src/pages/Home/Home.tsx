import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { loadPopularMovies, searchMovies } from '../../store/moviesSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import Loader from '../../components/Loader/Loader';
import styles from './Home.module.css';


const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const { list, loading, error } = useSelector(
        (state: RootState) => state.movies
    );

    useEffect(() => {
        dispatch(loadPopularMovies());
    }, [dispatch]);

    const handleSearch = (query: string) => {
        dispatch(searchMovies(query));
    };




    return (
        <div className={styles.container}>

            <h1 className={styles.HFinder}>Movie Finder</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <Loader />}
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.moviesGrid}>
                {list.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;