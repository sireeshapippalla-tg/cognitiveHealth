import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import { store } from './app/store';
import theme from './theme/theme';

import { DemoProvider } from './context/DemoContext';

import './index.css';
import './theme/colors.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HelmetProvider>
          <DemoProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </DemoProvider>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
