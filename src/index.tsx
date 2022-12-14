import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {DarkModeProvider} from './contexts/darkMode';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
      <DarkModeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </DarkModeProvider>
    </React.StrictMode>
);