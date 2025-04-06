import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Favorites.module.css';

const Favorites: React.FC = () => {
    const favorites = useSelector((state: RootState) => state.favorites.list);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Favorites</h1>

            {favorites.length === 0 ? (
                <div className={styles.empty}>
                    <p>You haven't added any movies to favorites yet.</p>
                    <p>Start by exploring movies on the homepage!</p>
                </div>
            ) : (
                <div className={styles.moviesGrid}>
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} isFavorite />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;