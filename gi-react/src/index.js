import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App info = 'Victor, 19 years old' people = {[{BasicInfo: 'Tommy, 19 years old'}, {BasicInfo: 'Jaylin, 19 years old'}, {BasicInfo: 'Oscar, 26 years old'}, {BasicInfo: 'Reggie, 25 years old'}]}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
