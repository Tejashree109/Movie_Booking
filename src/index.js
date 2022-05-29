import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './common/Header/header';
import reportWebVitals from './reportWebVitals';
import Gridlist from './common/Gridlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Gridlist/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
