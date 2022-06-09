import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppContextProvider } from './context/AppContext';
import Main from './components/Main';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  </StrictMode>
);
