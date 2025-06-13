import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { initMercadoPago } from '@mercadopago/sdk-react';
import './index.css';
import App from './App';

// Reemplaza esto por tu clave real o usa una variable de entorno si configuras dotenv.
initMercadoPago("APP_USR-8e757599-164c-4d80-9888-bad2ee1e5881");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
