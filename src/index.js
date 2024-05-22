import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Relogio from './Relogio.js';
import Letreiro from './Letreiro.js';
import Contador from './Contador.js'
import { Container,Nav,NavDropdown, Navbar } from 'react-bootstrap';
import MinhasRotas from './minhaRotas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <>
    <MinhasRotas />
 </> 
);


