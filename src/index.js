import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './css/main.css'

const app = ReactDOMClient.createRoot(document.getElementById("root"));

app.render(<App/>);


/* import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */





