import logo from './logo.svg';
import './App.css';
import MinhasRotas from './minhaRotas';
import Gallery from './GaLLery.js';
import { Profile } from './GaLLery.js'
import { func } from 'prop-types';

export default function App () {
  return (
    <Gallery />
  );
}

export default function App() {
  return <Profile />;
}

import GaLLery from './GaLLery.js';
import { Profile } from './GaLLery.js'

export default function App () {
  return (
    <Profile />
  );
}
function App() {
  return (
    <>
      <h1>Fatec</h1>
      <MinhasRotas />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

