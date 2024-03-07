import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../src/translateFolder/i18n';
import store from './store/store';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter >
        <Provider store={store}>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </Provider>
    </BrowserRouter>
);

