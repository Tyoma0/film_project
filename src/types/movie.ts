export interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    release_date: string;
    overview: string;
    vote_average: number;
    genre_ids?: number[];
}

export interface MovieDetails extends Movie {
    videos?: {
        results: Video[];
    };
    genres?: {
        id: number;
        name: string;
    }[];
    runtime?: number;
}

export interface Video {
    key: string;
    type: string;
}

export interface Genre {
    id: number;
    name: string;
}