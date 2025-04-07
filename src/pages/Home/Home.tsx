


import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { loadPopularMovies, searchMovies, loadGenres } from '../../store/moviesSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import Loader from '../../components/Loader/Loader';
import GenreFilter from '../../components/GenreFilter/GenreFilter'; // Новый компонент
import styles from './Home.module.css';

const Home= () => {
    const dispatch = useAppDispatch();
    const {
        list,
        loading,
        error,
        genres
    } = useSelector((state: RootState) => state.movies);

    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

    useEffect(() => {
        dispatch(loadPopularMovies());
        dispatch(loadGenres());
    }, [dispatch]);

    const handleSearch = (query: string) => {
        dispatch(searchMovies(query));
        setSelectedGenre(null); // Сброс фильтра при поиске
    };

    const handleGenreSelect = (genreId: number | null) => {
        setSelectedGenre(genreId);
    };

    // Фильтрация фильмов по жанру
    const filteredMovies = selectedGenre
        ? list.filter(movie => movie.genre_ids?.includes(selectedGenre))
        : list;

    return (
        <div className={styles.container}>

            <div className={styles.GenreStyles}>
                <h1 className={styles.HFinder}>Movie Finder</h1>
                <SearchBar onSearch={handleSearch} />

                <div className={styles.genreWrapper}>
                    <GenreFilter
                        genres={genres}
                        selectedGenre={selectedGenre}
                        onSelect={handleGenreSelect}
                    />
                </div>
            </div>



            {loading && <Loader />}
            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.moviesGrid}>
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;