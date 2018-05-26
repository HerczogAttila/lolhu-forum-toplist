import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './routing';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routing/>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
