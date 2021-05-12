import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//import './assets/css/style.css';
import {BrowserRouter} from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
ReactDom.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById('root'))