import React from 'react';
import { render } from 'react-dom';

import './babel';
import './styles/main.scss';

const App = () => (
  <div>
    <div className="main">Hello</div>
    <div className="container">Hello World</div>
  </div>
);

render(<App />, document.getElementById('app'));