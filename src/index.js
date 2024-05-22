import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Relogio from './Relogio.js';
import Letreiro from './Letreiro.js';
import Contador from './Contador.js'
import { Container,Nav,NavDropdown, Navbar } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <>
    <Relogio />
    <Letreiro />
    <Contador />
 </> 
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

