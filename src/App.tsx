import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import PasswordPage from './pages/password';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={<Timer />} /> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/password" element={<PasswordPage />} />
            </Routes>
        </>
    );
};

export default App;
