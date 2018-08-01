import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './routes.js';
import {Provider} from 'react-redux';
import store from './store.js';

ReactDOM.render(<Provider store={store}>
                  <Router />
               </Provider>,
              document.getElementById('root'));
