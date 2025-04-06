

type Video ={
    key: string;
    type: string;
}



type Movie ={
    id: number;
    title: string;
    poster_path: string | null;
    overview: string;
    release_date: string;
    vote_average: number;
    videos?: {  // Делаем поле опциональным
        results: Video[];
    };
}




export const mockMovies: Movie[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        poster_path: "/images/movies.jpg",
        overview: "Two imprisoned men bond over a number of years...",
        release_date: "1994-09-23",
        vote_average: 8.7,
        videos: {
            results: [
                {
                    key: "6hB3S9bIaco", // Уникальный ID трейлера
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 2,
        title: "The Godfather",
        poster_path: "/images/movies.jpg",
        overview: "The aging patriarch of an organized crime dynasty...",
        release_date: "1972-03-24",
        vote_average: 8.7,
        videos: {
            results: [
                {
                    key: "sY1S34973zA", // Уникальный ID для Крёстного отца
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 3,
        title: "Pulp Fiction",
        poster_path: "/images/movies.jpg",
        overview: "The lives of two mob hitmen, a boxer...",
        release_date: "1994-09-10",
        vote_average: 8.5,
        videos: {
            results: [
                {
                    key: "s7EdQ4FqbhY", // Уникальный ID для Криминального чтива
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 4,
        title: "Inception",
        poster_path: "/images/inception.jpg",
        overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        release_date: "2010-07-16",
        vote_average: 8.8,
        videos: {
            results: [
                {
                    key: "YoHD9XEInc0",  // ID трейлера "Inception"
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 5,
        title: "The Dark Knight",
        poster_path: "/images/dark_knight.jpg",
        overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        release_date: "2008-07-18",
        vote_average: 9.0,
        videos: {
            results: [
                {
                    key: "EXeTwQWrcwY",  // ID трейлера "The Dark Knight"
                    type: "Trailer"
                },
                {
                    key: "kmJLuwP3MbY",  // Альтернативный трейлер
                    type: "Teaser"
                }
            ]
        }
    },
    {
        id: 6,
        title: "Parasite",
        poster_path: "/images/parasite.jpg",
        overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        release_date: "2019-05-21",
        vote_average: 8.6,
        videos: {
            results: [
                {
                    key: "SEUXfv87Wpk",  // ID трейлера "Parasite"
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 7,
        title: "Interstellar",
        poster_path: "/images/interstellar.jpg",
        overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        release_date: "2014-11-07",
        vote_average: 8.6,
        videos: {
            results: [
                {
                    key: "zSWdZVtXT7E", // Официальный трейлер
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 8,
        title: "The Shawshank Redemption",
        poster_path: "/images/shawshank.jpg",
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        release_date: "1994-09-23",
        vote_average: 9.3,
        videos: {
            results: [
                {
                    key: "6hB3S9bIaco", // Трейлер
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 9,
        title: "The Godfather",
        poster_path: "/images/godfather.jpg",
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        release_date: "1972-03-24",
        vote_average: 9.2,
        videos: {
            results: [
                {
                    key: "sY1S34973zA", // Трейлер
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 10,
        title: "Fight Club",
        poster_path: "/images/fightclub.jpg",
        overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        release_date: "1999-09-10",
        vote_average: 8.8,
        videos: {
            results: [
                {
                    key: "qtRKdVHc-cE", // Трейлер
                    type: "Trailer"
                }
            ]
        }
    }

];



export const mockGenres = [
    { id: 18, name: "Drama" },
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" }
];