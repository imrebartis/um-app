import * as React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { AppContextProvider } from './context/AppContext';
import Main from './components/Main';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  </StrictMode>,
  rootElement);
