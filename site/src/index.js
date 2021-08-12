import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import createRoutes from './routes.js'
import './index.css';
import reportWebVitals from './reportWebVitals';

export const [loggedIn, setLoggedIn] = useState(false)
export const [username, setUsername] = useState("")
export const [password, setPassword] = useState("")

const routes = createRoutes();

ReactDOM.render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
