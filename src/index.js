import React from 'react';
import ReactDOM from 'react-dom/client';
import store from '../src/store/index';
import { Provider } from 'react-redux';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

