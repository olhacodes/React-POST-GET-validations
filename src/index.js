import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UsersContextProvider from './context/UsersContext';
import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersContextProvider>
    <App />
  </UsersContextProvider>
);