import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home.jsx';
import ChatMenu from './Pages/chatMenu.jsx';
import ChatRoom from './Pages/chatRoom.jsx';
import UndefinedPage from './Pages/undefined.jsx';
import WhosThatPokemon from './Pages/pokemonIdentify.jsx';
import Navbar from './components.jsx/navbar.jsx';
import SiwanKovimmat from './Pages/products.jsx';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/chatmenu" element={<ChatMenu />} />
                <Route exact path="/ChatRoom/:roomId" element={<ChatRoom />} />
                <Route exact path="/WhosThatPokemon" element={<WhosThatPokemon />} />
                <Route exact path="/SiwanKovimmat" element={<SiwanKovimmat />} />
                <Route path="*" element={<UndefinedPage />}></Route>
            </Routes>
        </Router >
    );
}

export default App;
