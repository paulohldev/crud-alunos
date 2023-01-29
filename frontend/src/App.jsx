import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Lista from './views/Lista';
import Formulario from './views/Formulario';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="alunos" element={<Lista />} />
          <Route path="alunos/formulario" element={<Formulario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
