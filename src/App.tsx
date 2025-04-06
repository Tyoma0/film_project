import React from 'react';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Favorites from './pages/Favorites/Favorites';
import {Header} from "./layors/Header/Header.tsx";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
               <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;