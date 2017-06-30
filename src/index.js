import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider } from 'material-ui/styles';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
