import Searcher  from "./Searcher.jsx";
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login.jsx';
import Register from './Registr.jsx';
import { Header, Scroll } from './header.jsx';



function App() {
    const location = useLocation();
    const showHeader = location.pathname !== '/log' && location.pathname !== '/registr' && location.pathname !== '/search';

    return (
        <div className="app-container">
            <Header />
            <Routes>
                <Route path="/log" element={<Login />} />
                <Route path="/registr" element={<Register />} />
                <Route path="/search" element={<Searcher />} />
            </Routes>
            <main className="main items-center">
                <div className="container mx-auto px-0 py-8">
                    {showHeader && <Scroll title="Популярное" />}
                </div>
                <div className="container mx-auto px-0 py-8">
                    {showHeader && <Scroll title="Рекомендации" />}
                </div>
                <div className="container mx-auto px-0 py-8">
                    {showHeader && <Scroll title="Экшен" />}
                </div>
            </main>
        </div>
    );
}

export default App;