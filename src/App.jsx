import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home.jsx';
import ChatMenu from './Pages/chatMenu.jsx';
import ChatRoom from './Pages/chatRoom.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/ChatMenu" element={<ChatMenu />} />
                <Route path="/ChatRoom/:roomId" element={<ChatRoom />} />
            </Routes>
        </Router>
    );
}

export default App;
