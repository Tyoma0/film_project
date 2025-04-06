import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import styles from './MovieCard.module.css';


type MovieCardProps ={
    movie: Movie;
    isFavorite?: boolean;
}



const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite = false }) => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = '/images/movies.jpg';
    };

    return (
        <Link to={`/movie/${movie.id}`} className={styles.cardLink}>
            <div className={styles.card}>
                <div className={styles.posterContainer}>
                    <img
                        src={movie.poster_path || '/images/movies.jpg'}
                        alt={`Постер ${movie.title}`}
                        className={styles.poster}
                        onError={handleImageError}
                    />
                    {isFavorite && <span className={styles.favoriteBadge}>❤️</span>}
                </div>
                <h3 className={styles.title}>{movie.title}</h3>
                <p className={styles.year}>{new Date(movie.release_date).getFullYear()}</p>
            </div>
        </Link>
    );
};

export default MovieCard;