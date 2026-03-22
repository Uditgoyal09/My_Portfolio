import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden">
        <App />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
