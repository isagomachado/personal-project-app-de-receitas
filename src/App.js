import React from 'react';
import Routes from './Routes';
import './Styles/App.css';
import './Styles/Header.css';
import './Styles/Nav.css';

function App() {
  return (
    <main data-testid="routes">
      <Routes />
    </main>
  );
}

export default App;
