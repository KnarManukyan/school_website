import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import RouteError from '../components/error/RouteError.js';
import App from '../container/App.js';
import Login from '../components/login/Login.js';
import Admin from '../components/admin/Admin.js';
import { PrivateRoute } from './privateRoutes';
import {history} from '../history.js';

export default class BrowserRouter extends Component{
  render (){
    return(
        <Router history={history}>
          <Switch>
            <Route path={"/"} component={App} exact/>
            <PrivateRoute exact path="/home" component={Admin} />
            <Route  path="/login" render={() => (
              localStorage.getItem('user') ? (<Redirect to={"/home"}/>) : (<Login />))}/>
            <Route component={RouteError} />
          </Switch>
        </Router>
    )
  }
}
