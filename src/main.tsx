import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

// Reemplaza esto por tu clave real o usa una variable de entorno si configuras dotenv.

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
