import React from 'react';
import Logo from 'assets/img/logo.svg';

import './index.scss';

function MyComponent() {
  return (
    <div className="MyComponent">
      <header className="MyComponent-header">
        <img src={Logo} className="MyComponent-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="MyComponent-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MyComponent;
