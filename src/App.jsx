/*App.jsx*/

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import '../src/App.css';
import Home from './componentes/paginas/Home';
import Noticias from './componentes/paginas/Noticias';
import Equipos from './componentes/paginas/Equipos';
import Multimedia from './componentes/paginas/Multimedia';
import Contacto from './componentes/paginas/Contacto';
import Historia from './componentes/paginas/Historia';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
