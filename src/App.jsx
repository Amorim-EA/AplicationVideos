import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import VideoPage from './pages/VideoPage/VideoPage';
import './App.css';

export default function App() {
  return(
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}