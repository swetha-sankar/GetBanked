import React from 'react';
import ReactDOM from 'react-dom';
import createRoutes from './routes.js'
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router } from "react-router-dom";
const routes = createRoutes();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    {routes}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
