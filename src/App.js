import './styles/App.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import Search from './search/search';
import Profile from './profile';
import LoginPage from './login';
import ListsPage from './lists';

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
          <Route path="/lists" element={<ListsPage />} />"
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
