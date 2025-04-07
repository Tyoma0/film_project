import React from 'react';
import { Genre } from '../../types/movie';
import styles from './GenreFilter.module.css';



type GenreFilterProps = {
    genres: Genre[];
    selectedGenre: number | null;
    onSelect: (genreId: number | null) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({
                                                     genres,
                                                     selectedGenre,
                                                     onSelect
                                                 }) => {
    return (
        <div className={styles.container}>
            <button
                className={`${styles.genreButton} ${!selectedGenre ? styles.active : ''}`}
                onClick={() => onSelect(null)}
            >
                All Genres
            </button>

            {genres.map((genre) => (
                <button
                    key={genre.id}
                    className={`${styles.genreButton} ${
                        selectedGenre === genre.id ? styles.active : ''
                    }`}
                    onClick={() => onSelect(genre.id)}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export default GenreFilter;