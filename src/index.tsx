import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureStore from './redux/configure-store';

const store = configureStore(window.PRELOADED_STATE);

const app = (
  <Provider Router={BrowserRouter} store={store}>
    <App />
  </Provider>
);

hydrate(app, document.getElementById("root"));
