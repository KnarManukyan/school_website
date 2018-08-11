import React, { Component } from 'react';
import '../assets/css/App.css';
import pic from '../assets/school.jpg';
import {history} from '../history.js';

export default class App extends Component {
  render() {
    let buttonName = (localStorage.getItem('user') ? 'Continue' : 'Login')
    return (
      <div className="school-image" style={{backgroundImage: "url(" + pic + ")"}}>
        <header className="App-header">
          <h1 className="App-title">School website</h1>
          <div>
            <button onClick = {() => {history.push('/login')}} className="login-button">
                {buttonName}
            </button>
          </div>
        </header>
      </div>
    );
  }
}
