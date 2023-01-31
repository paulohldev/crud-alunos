import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Container } from './components/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
);
