

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
    genre_ids: number[];
    videos?: {  // Делаем поле опциональным
        results: Video[];
    };
}




export const mockMovies: Movie[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        poster_path: "/images/shawshank.jpg",
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        release_date: "1994-09-23",
        vote_average: 9.3,
        genre_ids: [18],
        videos: {
            results: [
                {
                    key: "6hB3S9bIaco",
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 2,
        title: "The Godfather",
        poster_path: "/images/godfather.jpg",
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        release_date: "1972-03-24",
        vote_average: 9.2,
        genre_ids: [18, 80],
        videos: {
            results: [
                {
                    key: "sY1S34973zA",
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 3,
        title: "Pulp Fiction",
        poster_path: "/images/pulpfiction.jpg",
        overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        release_date: "1994-09-10",
        vote_average: 8.9,
        genre_ids: [53, 80],
        videos: {
            results: [
                {
                    key: "s7EdQ4FqbhY",
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
        genre_ids: [28, 878, 12],
        videos: {
            results: [
                {
                    key: "YoHD9XEInc0",
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 5,
        title: "The Dark Knight",
        poster_path: "/images/darkknight.jpg",
        overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        release_date: "2008-07-18",
        vote_average: 9.0,
        genre_ids: [28, 80, 18],
        videos: {
            results: [
                {
                    key: "EXeTwQWrcwY",
                    type: "Trailer"
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
        genre_ids: [53, 18],
        videos: {
            results: [
                {
                    key: "SEUXfv87Wpk",
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
        genre_ids: [12, 18, 878],
        videos: {
            results: [
                {
                    key: "zSWdZVtXT7E",
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 8,
        title: "Fight Club",
        poster_path: "/images/fightclub.jpg",
        overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        release_date: "1999-09-10",
        vote_average: 8.8,
        genre_ids: [18],
        videos: {
            results: [
                {
                    key: "qtRKdVHc-cE",
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 9,
        title: "The Matrix",
        poster_path: "/images/matrix.jpg",
        overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        release_date: "1999-03-31",
        vote_average: 8.7,
        genre_ids: [28, 878],
        videos: {
            results: [
                {
                    key: "m8e-FF8MsqU",
                    type: "Trailer"
                }
            ]
        }
    },
    {
        id: 10,
        title: "Forrest Gump",
        poster_path: "/images/forrestgump.jpg",
        overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        release_date: "1994-07-06",
        vote_average: 8.8,
        genre_ids: [18, 10749],
        videos: {
            results: [
                {
                    key: "bLvqoHBptjg",
                    type: "Trailer"
                }
            ]
        }
    }
];

export const mockGenres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" }
];



