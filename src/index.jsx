import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';
import './styles/css.css';
import './babel';

const App = () => (
  <div>
    <div className="main">Hello</div>
    <div className="container">Hello World</div>
  </div>
);

render(<App />, document.getElementById('app'));