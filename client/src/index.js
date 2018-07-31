import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App.js';

ReactDOM.render(<Provider store={store}>
                  <App />
               </Provider>,
              document.getElementById('root'));
