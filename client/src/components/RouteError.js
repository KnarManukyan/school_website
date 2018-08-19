import React, { Component } from 'react';
import '../assets/css/error.css';
import space from '../assets/space.gif'
import {history} from '../history.js';

export default class Error extends Component{
  render(){
    return(
      <div className='container'>
        <div className='space' >
          <img className='image' src = {space} alt = 'space' />
        </div>
        <div className='error-text-div'>
          <h2 className = 'error-text'>ERROR 404</h2>
          <h3 className = 'error-info'> OOPS! The page you are looking for does not exist or is lost in the universe!!!</h3>
          <button className = 'go-back-button' onClick = {history.goBack}>
            Go back
          </button>
        </div>
      </div>
    )
  }
}
