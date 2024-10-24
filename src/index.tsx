import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

// Seleciona o contêiner root
const container = document.getElementById('root');

// Verifica se o contêiner existe
if (container) {
  const root = createRoot(container); // Cria a raiz usando createRoot

  // Renderiza o aplicativo
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('O elemento com ID "root" não foi encontrado.');
}
