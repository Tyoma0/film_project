
import styles from "./Main.module.css";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home.tsx";
import MovieDetails from "../../pages/MovieDetails/MovieDetails.tsx";
import Favorites from "../../pages/Favorites/Favorites.tsx";

const Main = () => {
    return (
        <section className={styles.sectionDiv}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </section >
    );
};

export default Main;