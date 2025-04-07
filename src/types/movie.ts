


export type Movie ={
    id: number;
    title: string;
    poster_path: string | null;
    release_date: string;
    overview: string;
    vote_average: number;
    genre_ids?: number[];
}

export type MovieDetails ={
    videos?: {
        results: Video[];
    };
    genres?: {
        id: number;
        name: string;
    }[];
    runtime?: number;
}


export type Video ={
    key: string;
    type: string;
}


export type Genre ={
    id: number;
    name: string;
}