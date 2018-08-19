import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/mainRoutes.js';
import {Provider} from 'react-redux';
import store from './store.js';
import {BrowserRouter} from "react-router-dom"
import './index.css';


ReactDOM.render(( <Provider store={store}>
                    <BrowserRouter>
                      <Router />
                    </BrowserRouter>
                   </Provider>
             ),document.getElementById('root'));
