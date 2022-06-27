import React from 'react';
import ReactDOM from 'react-dom/client';
import store from '../src/store/index';
import { Provider } from 'react-redux';
import App from './App';

import './styles/global.css';
import './styles/variables.css';
import './styles/normalize.css';
import './styles/grid.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

