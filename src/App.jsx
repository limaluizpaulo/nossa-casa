import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Páginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import AgendaPage from './pages/AgendaPage';
import OficinasPage from './pages/OficinasPage';
import AluguelPage from './pages/AluguelPage';
import LojaPage from './pages/LojaPage';
import DoePage from './pages/DoePage';
import VoluntariadoPage from './pages/VoluntariadoPage';
import FacilitarPage from './pages/FacilitarPage';
import BlogPage from './pages/BlogPage';
import TransparenciaPage from './pages/TransparenciaPage';
import ContatoPage from './pages/ContatoPage';

import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/oficinas" element={<OficinasPage />} />
            <Route path="/aluguel" element={<AluguelPage />} />
            <Route path="/loja" element={<LojaPage />} />
            <Route path="/doe" element={<DoePage />} />
            <Route path="/voluntariado" element={<VoluntariadoPage />} />
            <Route path="/facilitar" element={<FacilitarPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/transparencia" element={<TransparenciaPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
