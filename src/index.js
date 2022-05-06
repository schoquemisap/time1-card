import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Component/App';
import { cardList } from './cardAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App list = {cardList} />
  </React.StrictMode>
);

