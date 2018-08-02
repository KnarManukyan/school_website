import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from "history";
import RouteError from './components/RouteError.js';
import App from './container/App.js';
import Login from './components/login/Login.js';

import {Provider} from 'react-redux';
import store from './store.js';
const history = createBrowserHistory();

export default class BrowserRouter extends React.Component{
  render (){
    return(
        <Router history={history}>
          <Switch>
            <Route path={"/home"} component={App} exact/>
            <Route path={"/login"} component={Login} exact/>
            <Route component={RouteError} />
          </Switch>
        </Router>
    )
  }
}
