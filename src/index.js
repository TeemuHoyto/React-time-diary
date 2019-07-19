import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './content/App';
import * as serviceWorker from './serviceWorker';
let hippobeba =document.getElementById('root');

ReactDOM.render(<App />, hippobeba);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
