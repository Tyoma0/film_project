import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchMovieDetails } from '../../services/api';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';
import Loader from '../../components/Loader/Loader';
import styles from './MovieDetails.module.css';

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const favorites = useSelector((state: RootState) => state.favorites.list);

    const isFavorite = favorites.some((fav) => fav.id === Number(id));

    useEffect(() => {
        const loadMovie = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieDetails(Number(id));
                setMovie(data);
            } catch (err) {
                setError('Failed to load movie details');
            } finally {
                setLoading(false);
            }
        };

        loadMovie();
    }, [id]);

    const handleFavoriteClick = () => {
        if (movie) {
            if (isFavorite) {
                dispatch(removeFromFavorites(movie.id));
            } else {
                dispatch(addToFavorites(movie));
            }
        }
    };

    if (loading) return <Loader />;
    if (error) return <div className={styles.error}>{error}</div>;
    if (!movie) return <div className={styles.notFound}>Movie not found</div>;

    const trailer = movie.videos?.results.find(
        (video: any) => video.type === 'Trailer'
    );

    return (
        <div className={styles.container}>
            <div className={styles.detailsContainer}>
                <img
                    src={
                        movie.poster_path
                            ? `/images/movies.jpg`
                            : '/placeholder.jpg'
                    }
                    alt={movie.title}
                    className={styles.poster}
                />
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {movie.title} ({new Date(movie.release_date).getFullYear()})
                    </h1>
                    <button
                        onClick={handleFavoriteClick}
                        className={styles.favoriteButton}
                    >
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                    <p className={styles.overview}>{movie.overview}</p>

                    {movie.genres && (
                        <div className={styles.meta}>
                            <strong>Genres:</strong>{' '}
                            {movie.genres.map((genre: any) => genre.name).join(', ')}
                        </div>
                    )}

                    {movie.runtime && (
                        <div className={styles.meta}>
                            <strong>Runtime:</strong> {movie.runtime} minutes
                        </div>
                    )}

                    <div className={styles.meta}>
                        <strong>Rating:</strong> {movie.vote_average}/10
                    </div>
                </div>
            </div>

            {trailer && (
                <div className={styles.trailerContainer}>
                    <h2 className={styles.trailerTitle}>Trailer</h2>
                    <div className={styles.iframeWrapper}>
                        <iframe
                            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.trailerIframe}
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;