import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@shared';
import { GlobalStyle } from './shared/components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme.lightTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);

reportWebVitals();
