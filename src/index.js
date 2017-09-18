import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './Style/index.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
    <App />
, document.getElementById('root'));
registerServiceWorker();
