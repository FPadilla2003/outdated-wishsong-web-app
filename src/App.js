import './App.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Search from './search';
import Profile from './profile';
import LoginPage from './login';

function App() {

  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
