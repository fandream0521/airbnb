import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

import "@/assets/css/index.less"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter future={{"v7_relativeSplatPath": false, "v7_startTransition": false}}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
