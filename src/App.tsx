
import {BrowserRouter as Router,} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import {Header} from "./layors/Header/Header.tsx";
import Main from "./layors/Main/Main.tsx";
const App = () => {

    return (
        <Provider store={store}>
                <Router>
                    <Header />
                    <Main/>
                </Router>
        </Provider>
    );
};

export default App;