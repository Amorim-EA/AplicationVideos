import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import Home from './components/paginas/Home/Home';
import Cadastrar from './components/paginas/Cadastrar/Cadastrar';


export default function App() {

  
  return(
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </Router>
    </>
  );
}