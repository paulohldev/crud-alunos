// import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Lista from './components/List/Lista';
import Formulario from './components/Forms/Formulario';
import NotFound from './NotFound';
import { GlobalStyles } from './components/styles';

function App() {
  return (
    <>
      <GlobalStyles />
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
