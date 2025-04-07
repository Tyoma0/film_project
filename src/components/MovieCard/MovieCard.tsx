import React from 'react';
import { Link } from 'react-router-dom';
import { Movie} from '../../types/movie';
import styles from './MovieCard.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../store";


type MovieCardProps ={
    movie: Movie;
    isFavorite?: boolean;

}



const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite = false }) => {
    const genres = useSelector((state: RootState) => state.movies.genres);
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
                <div className={styles.cardDiv}>
                    <h3 className={styles.title}>{movie.title}</h3>
                    <p className={styles.year}>{new Date(movie.release_date).getFullYear()}</p>
                    <div className={styles.genres}>
                        {movie.genre_ids?.slice(0, 2).map(genreId => (
                            <span key={genreId} className={styles.genre}>
              {genres.find(g => g.id === genreId)?.name}
            </span>
                        ))}
                        {movie.genre_ids && movie.genre_ids.length > 2 && (
                            <span className={styles.moreGenres}>+{movie.genre_ids.length - 2}</span>
                        )}
                    </div>
                </div>


            </div>
        </Link>
    );
};

export default MovieCard;